"use client"

/* © 2025 Maheshwar Patnala */
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

// Simple laptop geometry since we can't load external models
const LaptopModel = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Laptop Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Laptop Screen */}
      <mesh position={[0, 0.3, -0.9]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen Display */}
      <mesh position={[0, 0.3, -0.85]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshStandardMaterial color="#E156A9" emissive="#E156A9" emissiveIntensity={0.3} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.4, 0.2]}>
        <boxGeometry args={[2.6, 0.05, 1.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, -0.35, 0.6]}>
        <boxGeometry args={[1, 0.02, 0.6]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </group>
  )
}

const Laptop3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E156A9" />
        <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} />

        <LaptopModel />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

export default Laptop3D
