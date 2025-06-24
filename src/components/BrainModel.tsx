import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useBrainStore } from '../store/brainStore'

export default function BrainModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { showBrain, brainOpacity } = useBrainStore()
  
  // 簡易的な脳形状のジオメトリ生成
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(50, 64, 64)
    const positions = geo.attributes.position.array
    
    // 脳の形状に近づけるための変形
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      
      // 前後に伸ばす
      positions[i] *= 1.2
      // 上下を少し圧縮
      positions[i + 1] *= 0.8
      // 左右はそのまま
      
      // 前頭部を膨らませる
      if (x > 20) {
        positions[i + 1] += Math.sin(x * 0.1) * 5
      }
    }
    
    geo.computeVertexNormals()
    return geo
  }, [])
  
  useFrame((state) => {
    if (meshRef.current && showBrain) {
      // 微細な呼吸のようなアニメーション
      meshRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.01
      )
    }
  })
  
  if (!showBrain) return null
  
  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#f0f0f0"
        transparent
        opacity={brainOpacity}
        roughness={0.7}
        metalness={0.1}
        clearcoat={0.3}
        clearcoatRoughness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}