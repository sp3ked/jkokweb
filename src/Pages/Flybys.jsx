import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Low-poly aircraft that cross the screen once; every model's local +x is its nose

function Raptor() {
  const planform = useMemo(() => {
    const half = [
      [5.2, 0], [2.6, 0.5], [1.0, 0.85], [-2.1, 3.4], [-2.7, 3.2], [-2.2, 1.0],
      [-2.6, 1.0], [-3.8, 2.3], [-4.3, 2.0], [-4.1, 0.6], [-4.2, 0],
    ];
    const outline = [...half, ...half.slice(1, -1).reverse().map(([x, z]) => [x, -z])];
    const shape = new THREE.Shape(outline.map(([x, z]) => new THREE.Vector2(x, z)));
    return new THREE.ExtrudeGeometry(shape, { depth: 0.12, bevelEnabled: false });
  }, []);

  const tail = useMemo(() => {
    const shape = new THREE.Shape(
      [[-1.9, 0], [-3.4, 1.8], [-4.1, 1.8], [-3.9, 0]].map(([x, y]) => new THREE.Vector2(x, y))
    );
    return new THREE.ExtrudeGeometry(shape, { depth: 0.06, bevelEnabled: false });
  }, []);

  const skin = <meshStandardMaterial color="#5b6168" metalness={0.6} roughness={0.45} />;

  return (
    <group>
      <mesh geometry={planform} rotation={[-Math.PI / 2, 0, 0]}>
        {skin}
      </mesh>
      <mesh position={[0.4, 0.1, 0]} scale={[4.6, 0.42, 0.8]}>
        <sphereGeometry args={[1, 24, 12]} />
        {skin}
      </mesh>
      <mesh position={[2.5, 0.42, 0]} scale={[1.0, 0.28, 0.3]}>
        <sphereGeometry args={[1, 20, 10]} />
        <meshStandardMaterial color="#c9a227" metalness={0.9} roughness={0.15} />
      </mesh>
      {[1, -1].map((side) => (
        <group key={side} position={[0, 0.1, side * 0.75]} rotation={[side * 0.45, 0, 0]}>
          <mesh geometry={tail}>{skin}</mesh>
        </group>
      ))}
      {[1, -1].map((side) => (
        <mesh key={`nozzle${side}`} position={[-4.15, 0.08, side * 0.35]} rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.22, 0.9, 10]} />
          <meshBasicMaterial color="#ff8a2a" transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

function Quadcopter({ ledColor }) {
  const rotors = useRef([]);
  useFrame((_, delta) => rotors.current.forEach((rotor) => rotor && (rotor.rotation.y += delta * 40)));

  return (
    <group>
      <mesh>
        <boxGeometry args={[0.7, 0.18, 0.7]} />
        <meshStandardMaterial color="#2b2f33" metalness={0.5} roughness={0.5} />
      </mesh>
      {[Math.PI / 4, -Math.PI / 4].map((angle) => (
        <mesh key={angle} rotation={[0, angle, 0]}>
          <boxGeometry args={[2.2, 0.08, 0.12]} />
          <meshStandardMaterial color="#3a3f45" />
        </mesh>
      ))}
      {[[0.78, 0.78], [0.78, -0.78], [-0.78, 0.78], [-0.78, -0.78]].map(([x, z], index) => (
        <group key={index} position={[x, 0.12, z]} ref={(rotor) => (rotors.current[index] = rotor)}>
          <mesh>
            <boxGeometry args={[0.95, 0.02, 0.1]} />
            <meshStandardMaterial color="#9aa3ad" />
          </mesh>
        </group>
      ))}
      <mesh position={[0.36, 0, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color={ledColor} />
      </mesh>
    </group>
  );
}


// Moves its child from start to end over `seconds`, then reports done
function Crossing({ seconds, start, end, pose, children, onDone }) {
  const craft = useRef();
  const elapsed = useRef(0);
  const finished = useRef(false);
  const from = useMemo(() => new THREE.Vector3(...start), [start]);
  const to = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame((_, delta) => {
    if (finished.current) return;
    elapsed.current += delta;
    const progress = Math.min(elapsed.current / seconds, 1);
    craft.current.position.lerpVectors(from, to, progress);
    pose(craft.current, progress, elapsed.current);
    if (progress >= 1) {
      finished.current = true;
      onDone();
    }
  });

  return <group ref={craft}>{children}</group>;
}

const F22_START = [-46, -4, -20];
const F22_END = [46, 6, 6];
const F22_YAW = -Math.atan2(F22_END[2] - F22_START[2], F22_END[0] - F22_START[0]);

const SWARM = Array.from({ length: 15 }, (_, index) => {
  const row = Math.floor(index / 5);
  const column = index % 5;
  return {
    x: -column * 3.2 - row * 1.6,
    y: (row - 1) * 2.6 + (column % 2) * 0.6,
    z: (column - 2) * 1.8 - row * 2,
    phase: index * 0.7,
  };
});

const CRAFTS = {
  f22: (onDone) => (
    <Crossing
      key="f22"
      seconds={3.4}
      start={F22_START}
      end={F22_END}
      onDone={onDone}
      pose={(craft, progress) => craft.rotation.set(Math.sin(progress * Math.PI) * 0.6, F22_YAW, 0.08)}
    >
      <group scale={1.4}>
        <Raptor />
      </group>
    </Crossing>
  ),
  drones: (onDone) => (
    <Crossing
      key="drones"
      seconds={7}
      start={[-48, 3, 0]}
      end={[48, 3, 0]}
      onDone={onDone}
      pose={(craft, _, elapsed) => {
        craft.rotation.set(0.25, -0.25, 0);
        craft.children.forEach((drone, index) => {
          const slot = SWARM[index];
          drone.position.y = slot.y + Math.sin(elapsed * 2.4 + slot.phase) * 0.35;
          drone.rotation.z = -0.22 + Math.sin(elapsed * 1.7 + slot.phase) * 0.05;
        });
      }}
    >
      {SWARM.map((slot, index) => (
        <group key={index} position={[slot.x, slot.y, slot.z]}>
          <Quadcopter ledColor={index % 2 ? "#ff4040" : "#40ff7a"} />
        </group>
      ))}
    </Crossing>
  ),
};

function Flybys({ crafts, onDone }) {
  const remaining = useRef(crafts.length);
  const craftDone = () => {
    remaining.current -= 1;
    if (remaining.current === 0) onDone();
  };

  return (
    <div className="flyby-overlay" aria-hidden="true">
      <Canvas camera={{ position: [0, 2, 24], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 8]} intensity={2.2} />
        {crafts.map((kind) => CRAFTS[kind](craftDone))}
      </Canvas>
    </div>
  );
}

export default Flybys;
