import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

const PyramidMesh = () => {
  const meshRef = useRef()
  const { mouse } = useThree()
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Constant rotation
      meshRef.current.rotation.y += delta * 0.5
      
      // Constant floating
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.3
      
      // Mouse interaction (smooth rotation towards cursor)
      const targetRotationX = (mouse.y * Math.PI) / 6
      const targetRotationY = (mouse.x * Math.PI) / 6
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1)
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      {/* radialSegments=4 for square base */}
      <coneGeometry args={[1.5, 2.5, 4]} />
      <meshStandardMaterial 
        color="#34A853" 
        transparent={true} 
        opacity={0.7} 
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  )
}

export default PyramidMesh
