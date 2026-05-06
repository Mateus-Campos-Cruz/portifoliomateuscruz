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
      const time = state.clock.getElapsedTime();
      
      // Constant rotation
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.05;
      
      // Random wandering floating (Lissajous curve, slower)
      meshRef.current.position.x = Math.sin(time * 0.1) * 3.5;
      meshRef.current.position.y = Math.sin(time * 0.15) * 2;
      meshRef.current.position.z = Math.cos(time * 0.08) * 1.5;
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
      <coneGeometry args={[0.25, 0.4, 4]} />
      <meshStandardMaterial 
        color="#3aedbe" 
        transparent={true} 
        opacity={0.7} 
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  )
}

export default PyramidMesh
