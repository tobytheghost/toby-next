import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

const Sphere = ({ position, size, color }) => {
  const colors = useLoader(THREE.TextureLoader, '/assets/img/colours.png')
  const sphere = useRef()

  useFrame(() => {
    sphere.current.rotation.x = sphere.current.rotation.y += 0.00015
  })

  return (
    <mesh ref={sphere} position={position}>
      <sphereGeometry attach='geometry' args={size} />
      <meshStandardMaterial attach='material' color={color} map={colors} />
    </mesh>
  )
}

const Orbital = () => {
  const orbital = useRef()

  useEffect(() => {
    orbital.current.rotation.x = 0.4
  }, [])

  useFrame(() => {
    orbital.current.rotation.y += 0.01
  })

  return (
    <group ref={orbital} position={[-6, -2, -2]}>
      <Suspense fallback={null}>
        <Sphere position={[1, 0, 1]} size={[0.2, 8, 8]} color='#ff9800' />
        <Sphere position={[0, 0, 0]} size={[0.6, 8, 8]} color='#2196f3' />
      </Suspense>
    </group>
  )
}

const Orbital2 = () => {
  const orbital = useRef()

  useEffect(() => {
    orbital.current.rotation.x = 0.4
  }, [])

  useFrame(() => {
    orbital.current.rotation.y += 0.01
  })

  return (
    <group ref={orbital} position={[6, 2, -2]}>
      <Suspense fallback={null}>
        <mesh>
          <sphereGeometry attach='geometry' args={[0.5, 8, 8]} />
          <meshStandardMaterial attach='material' color='#ff9800' />
        </mesh>
      </Suspense>
    </group>
  )
}

const RotatingStars = () => {
  const stars = useRef()

  useFrame(() => {
    if (!stars) return
    stars.current.rotation.x = stars.current.rotation.y += 0.00015
  })

  return <Stars ref={stars} />
}

const StarsCanvas = ({ orbit, noOrbitals }) => {
  return (
    <div className='canvas'>
      <Canvas>
        <directionalLight intensity={1} castShadow position={[0, 0, 1]} />
        <RotatingStars />
        {!noOrbitals && <Orbital />}
        {!noOrbitals && <Orbital2 />}
        {orbit && <OrbitControls />}
      </Canvas>
    </div>
  )
}

export default StarsCanvas
