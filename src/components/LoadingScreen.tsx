import { Html } from '@react-three/drei'

export default function LoadingScreen() {
  return (
    <Html center>
      <div className="loading-screen">
        <div>
          <h2>Loading Brain Model...</h2>
          <p>Preparing visualization</p>
        </div>
      </div>
    </Html>
  )
}