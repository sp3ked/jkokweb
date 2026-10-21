import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FLIGHT_SECONDS = 3.4;
const START = new THREE.Vector3(-34, -3, -18);
const END = new THREE.Vector3(34, 4, 4);

// Low-poly F-22 built from primitives; local +x is the nose, y is up
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
      <mesh geometry={planform} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
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

function Flight({ onDone }) {
  const plane = useRef();
  const elapsed = useRef(0);
  const heading = useMemo(() => new THREE.Vector3().subVectors(END, START), []);
  const yaw = -Math.atan2(heading.z, heading.x);

  useFrame((_, delta) => {
    elapsed.current += delta;
    const progress = Math.min(elapsed.current / FLIGHT_SECONDS, 1);
    plane.current.position.lerpVectors(START, END, progress);
    plane.current.rotation.set(Math.sin(progress * Math.PI) * 0.6, yaw, 0.08);
    if (progress >= 1) onDone();
  });

  return (
    <group ref={plane}>
      <Raptor />
    </group>
  );
}

function F22Flyby() {
  const [flying, setFlying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  if (!flying) return null;

  return (
    <div className="f22-flyby" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 8]} intensity={2.2} />
        <Flight onDone={() => setFlying(false)} />
      </Canvas>
    </div>
  );
}

export default F22Flyby;
