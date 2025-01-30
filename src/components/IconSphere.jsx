import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAnimationContext } from '../Pages/animationContext';

const IconSphere = () => {
  const { isAnimationDisabled } = useAnimationContext();
  const icons = [
    { name: 'Python', icon: require('../images/python.png') },
    { name: 'React', icon: require('../images/react.png') },
    { name: 'JavaScript', icon: require('../images/javascript.png') },
    { name: 'HTML', icon: require('../images/html.png') },
    { name: 'Solidity', icon: require('../images/solidity.png') },
    { name: 'TypeScript', icon: require('../images/typescript.png') },
    { name: 'Java', icon: require('../images/java.png') },
    { name: 'C', icon: require('../images/c.png') },
  ];

  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (isAnimationDisabled) return;
    const time = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.z = time * 0.3;
    }
  });

  return (
    <group ref={sphereRef} position={[0, 0, 0]} scale={0.6}>
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * Math.PI * 2;
        const radius = 3; // increased radius
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        return (
          <mesh key={icon.name} position={[x, y, 0]}>
            <sprite scale={[1, 1, 1]}>
              <spriteMaterial attach="material" map={new THREE.TextureLoader().load(icon.icon)} />
            </sprite>
          </mesh>
        );
      })}
    </group>
  );
};

export default IconSphere;
