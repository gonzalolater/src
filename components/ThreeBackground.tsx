import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sphere[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return [sphere];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const FloatingCube = ({ position, rotationSpeed }: { position: [number, number, number], rotationSpeed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#0099ff"
        transparent
        opacity={0.7}
        emissive="#003366"
        wireframe
      />
    </mesh>
  );
};

const NetworkNodes = () => {
  const nodes = useMemo(() => {
    const nodePositions = [];
    for (let i = 0; i < 20; i++) {
      nodePositions.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number]);
    }
    return nodePositions;
  }, []);

  return (
    <group>
      {nodes.map((position, index) => (
        <FloatingCube
          key={index}
          position={position}
          rotationSpeed={0.2 + Math.random() * 0.3}
        />
      ))}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0099ff" />
        
        <Stars />
        <NetworkNodes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;