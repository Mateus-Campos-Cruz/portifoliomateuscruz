import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const UFO = () => {
  const ufoRef = useRef()

  useFrame((state, delta) => {
    if (!ufoRef.current) return
    const t = state.clock.getElapsedTime()

    // Spin on own axis Y
    ufoRef.current.rotation.y += delta * 0.6

    // Gentle oscillation on Z (never more than 20 degrees)
    ufoRef.current.rotation.z = Math.sin(t * 0.5) * (20 * (Math.PI / 180))

    // Floating wander across the screen (Lissajous-style)
    ufoRef.current.position.x = Math.sin(t * 0.13) * 3.5
    ufoRef.current.position.y = Math.sin(t * 0.19) * 1.8 + Math.cos(t * 0.11) * 0.6
    ufoRef.current.position.z = Math.cos(t * 0.09) * 1.2
  })

  const metalMat = (
    <meshStandardMaterial
      color="#9aa5b0"
      metalness={0.6}
      roughness={0.25}
    />
  )

  // Build detail bumps on the rim
  const bumpCount = 10
  const bumps = Array.from({ length: bumpCount }, (_, i) => {
    const angle = (i / bumpCount) * Math.PI * 2
    const r = 0.78
    return (
      <mesh
        key={i}
        position={[Math.cos(angle) * r, 0.02, Math.sin(angle) * r]}
        rotation={[0, -angle, 0]}
      >
        <sphereGeometry args={[0.06, 8, 6]} />
        {metalMat}
      </mesh>
    )
  })

  return (
    <group ref={ufoRef}>
      {/* Main disc body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.85, 0.18, 64, 1, false]} />
        {metalMat}
      </mesh>

      {/* Lower rounded belly */}
      <mesh position={[0, -0.09, 0]} scale={[1, 0.4, 1]}>
        <sphereGeometry args={[0.85, 64, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        {metalMat}
      </mesh>

      {/* Dome on top — glass effect */}
      <mesh position={[0, 0.17, 0]} scale={[1, 0.7, 1]}>
        <sphereGeometry args={[0.42, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#e8edf2"
          metalness={0.0}
          roughness={0.05}
          envMapIntensity={1}
        />
      </mesh>



      {/* Detail bumps on rim */}
      {bumps}
    </group>
  )
}

export default UFO
