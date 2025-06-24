import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Suspense } from 'react'
import { Leva } from 'leva'
import BrainModel from './components/BrainModel'
import DopaminePaths from './components/DopaminePaths'
import ElectricalActivity from './components/ElectricalActivity'
import Controls from './components/Controls'
import LoadingScreen from './components/LoadingScreen'

function App() {
  return (
    <>
      <div className="info-panel">
        <h3>WD109: Layered 3D Brain Map</h3>
        <p>Dopamine System Visualization</p>
      </div>
      
      <Controls />
      <Leva />
      
      <Canvas
        camera={{ position: [150, 50, 0], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} intensity={1} />
        
        <Suspense fallback={<LoadingScreen />}>
          <BrainModel />
          <DopaminePaths />
          <ElectricalActivity />
        </Suspense>
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.5}
          rotateSpeed={0.5}
        />
        <Stats />
      </Canvas>
    </>
  )
}

export default App