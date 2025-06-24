import * as THREE from 'three'

export interface DopaminePath {
  id: string
  name: string
  source: THREE.Vector3
  target: THREE.Vector3
  controlPoints: THREE.Vector3[]
  strength: number
  color: string
}

export const dopaminePaths: DopaminePath[] = [
  {
    id: 'vta-nacc',
    name: 'VTA → NAcc (Reward)',
    source: new THREE.Vector3(-10, -20, 0),
    target: new THREE.Vector3(15, 10, 20),
    controlPoints: [
      new THREE.Vector3(-5, -10, 10),
      new THREE.Vector3(5, 0, 15)
    ],
    strength: 0.8,
    color: '#ff6b6b'
  },
  {
    id: 'vta-pfc',
    name: 'VTA → PFC (Cognitive)',
    source: new THREE.Vector3(-10, -20, 0),
    target: new THREE.Vector3(35, 25, 0),
    controlPoints: [
      new THREE.Vector3(0, -5, 5),
      new THREE.Vector3(20, 15, 2)
    ],
    strength: 0.6,
    color: '#4ecdc4'
  },
  {
    id: 'snc-striatum',
    name: 'SNc → Striatum (Motor)',
    source: new THREE.Vector3(-15, -25, -5),
    target: new THREE.Vector3(0, 5, 15),
    controlPoints: [
      new THREE.Vector3(-10, -15, 5),
      new THREE.Vector3(-5, 0, 10)
    ],
    strength: 0.9,
    color: '#45b7d1'
  }
]

export const brainRegions = [
  { id: 'vta', name: '腹側被蓋野', position: new THREE.Vector3(-10, -20, 0), color: '#ff6b6b' },
  { id: 'snc', name: '黒質緻密部', position: new THREE.Vector3(-15, -25, -5), color: '#f39c12' },
  { id: 'nacc', name: '側坐核', position: new THREE.Vector3(15, 10, 20), color: '#2ecc71' },
  { id: 'striatum', name: '線条体', position: new THREE.Vector3(0, 5, 15), color: '#3498db' },
  { id: 'pfc', name: '前頭前野', position: new THREE.Vector3(35, 25, 0), color: '#9b59b6' }
]