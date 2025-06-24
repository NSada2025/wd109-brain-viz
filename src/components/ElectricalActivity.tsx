import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Line } from '@react-three/drei'
import { useBrainStore } from '../store/brainStore'

const WAVE_FREQUENCIES = {
  delta: { min: 1, max: 4, color: '#3498db', amplitude: 0.8 },
  theta: { min: 4, max: 8, color: '#2ecc71', amplitude: 0.6 },
  alpha: { min: 8, max: 13, color: '#f39c12', amplitude: 0.5 },
  beta: { min: 13, max: 30, color: '#e74c3c', amplitude: 0.4 },
  gamma: { min: 30, max: 80, color: '#9b59b6', amplitude: 0.3 }
}

function WaveVisualization({ frequency, position }: { frequency: keyof typeof WAVE_FREQUENCIES, position: THREE.Vector3 }) {
  const { currentTime, animationSpeed } = useBrainStore()
  
  const wave = WAVE_FREQUENCIES[frequency]
  
  const [points, setPoints] = useState<THREE.Vector3[]>(() => {
    const pts: THREE.Vector3[] = []
    const segments = 100
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments - 0.5) * 100
      pts.push(new THREE.Vector3(x, 0, 0))
    }
    
    return pts
  })
  
  useFrame(() => {
    const time = currentTime * animationSpeed * 0.001
    const newPoints = points.map((_, i) => {
      const x = (i / 100 - 0.5) * 100
      const y = Math.sin((x * 0.1 + time) * wave.min) * wave.amplitude * 10
      return new THREE.Vector3(x, y, 0)
    })
    setPoints(newPoints)
  })
  
  return (
    <Line
      points={points}
      color={wave.color}
      lineWidth={2}
      transparent
      opacity={0.8}
      position={position}
    />
  )
}

export default function ElectricalActivity() {
  const { showElectricalActivity } = useBrainStore()
  
  if (!showElectricalActivity) return null
  
  const positions = [
    new THREE.Vector3(0, 60, 0),
    new THREE.Vector3(30, 50, 20),
    new THREE.Vector3(-30, 50, 20),
    new THREE.Vector3(0, 40, -30),
    new THREE.Vector3(20, 30, -20)
  ]
  
  const frequencies: Array<keyof typeof WAVE_FREQUENCIES> = ['gamma', 'beta', 'alpha', 'theta', 'delta']
  
  return (
    <group>
      {positions.map((pos, idx) => (
        <WaveVisualization
          key={idx}
          frequency={frequencies[idx]}
          position={pos}
        />
      ))}
    </group>
  )
}