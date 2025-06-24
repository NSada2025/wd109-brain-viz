import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useBrainStore } from '../store/brainStore'
import { dopaminePaths, brainRegions } from '../data/dopaminePaths'

function DopaminePath({ path }: { path: typeof dopaminePaths[0] }) {
  const tubeRef = useRef<THREE.Mesh>(null)
  const { currentTime, animationSpeed, highlightedPath } = useBrainStore()
  
  const curve = useMemo(() => {
    const points = [
      path.source,
      ...path.controlPoints,
      path.target
    ]
    return new THREE.CatmullRomCurve3(points)
  }, [path])
  
  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, path.strength * 2, 8, false)
  }, [curve, path.strength])
  
  useFrame(() => {
    if (tubeRef.current) {
      const material = tubeRef.current.material as THREE.MeshPhysicalMaterial
      
      // Highlight effect
      const isHighlighted = highlightedPath === path.id
      material.emissiveIntensity = isHighlighted ? 0.5 : 0.1
      
      // Pulse effect based on time
      const pulse = Math.sin(currentTime * animationSpeed * 0.002 + path.id.length) * 0.5 + 0.5
      material.opacity = 0.6 + pulse * 0.3
    }
  })
  
  return (
    <mesh ref={tubeRef} geometry={geometry}>
      <meshPhysicalMaterial
        color={path.color}
        emissive={path.color}
        emissiveIntensity={0.1}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  )
}

function BrainRegion({ region }: { region: typeof brainRegions[0] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { selectedRegion } = useBrainStore()
  
  const isSelected = selectedRegion === region.id
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = isSelected ? 1.2 : 1
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 2) * 0.05)
    }
  })
  
  return (
    <mesh ref={meshRef} position={region.position}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshPhysicalMaterial
        color={region.color}
        emissive={region.color}
        emissiveIntensity={isSelected ? 0.5 : 0.2}
        metalness={0.3}
        roughness={0.3}
      />
    </mesh>
  )
}

export default function DopaminePaths() {
  const { showDopaminePaths } = useBrainStore()
  
  if (!showDopaminePaths) return null
  
  return (
    <group>
      {dopaminePaths.map(path => (
        <DopaminePath key={path.id} path={path} />
      ))}
      {brainRegions.map(region => (
        <BrainRegion key={region.id} region={region} />
      ))}
    </group>
  )
}