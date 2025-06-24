import { useBrainStore } from '../store/brainStore'
import { useControls } from 'leva'
import { useEffect } from 'react'

export default function Controls() {
  const {
    showBrain,
    brainOpacity,
    showDopaminePaths,
    showElectricalActivity,
    animationSpeed,
    isPlaying,
    toggleBrain,
    setBrainOpacity,
    toggleDopaminePaths,
    toggleElectricalActivity,
    setAnimationSpeed,
    togglePlayPause,
    selectRegion,
    highlightPath
  } = useBrainStore()
  
  useControls('Visualization', {
    showBrain: {
      value: showBrain,
      onChange: (v) => v !== showBrain && toggleBrain()
    },
    brainOpacity: {
      value: brainOpacity,
      min: 0,
      max: 1,
      step: 0.01,
      onChange: setBrainOpacity
    },
    showDopaminePaths: {
      value: showDopaminePaths,
      onChange: (v) => v !== showDopaminePaths && toggleDopaminePaths()
    },
    showElectricalActivity: {
      value: showElectricalActivity,
      onChange: (v) => v !== showElectricalActivity && toggleElectricalActivity()
    }
  })
  
  useControls('Animation', {
    playing: {
      value: isPlaying,
      onChange: (v) => v !== isPlaying && togglePlayPause()
    },
    speed: {
      value: animationSpeed,
      min: 0.1,
      max: 3,
      step: 0.1,
      onChange: setAnimationSpeed
    }
  })
  
  useControls('Regions', {
    selectedRegion: {
      value: 'none',
      options: ['none', 'vta', 'snc', 'nacc', 'striatum', 'pfc'],
      onChange: (v) => selectRegion(v === 'none' ? null : v)
    },
    highlightedPath: {
      value: 'none',
      options: ['none', 'vta-nacc', 'vta-pfc', 'snc-striatum'],
      onChange: (v) => highlightPath(v === 'none' ? null : v)
    }
  })
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case ' ':
          e.preventDefault()
          togglePlayPause()
          break
        case 'b':
          toggleBrain()
          break
        case 'd':
          toggleDopaminePaths()
          break
        case 'e':
          toggleElectricalActivity()
          break
      }
    }
    
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [togglePlayPause, toggleBrain, toggleDopaminePaths, toggleElectricalActivity])
  
  return (
    <div className="controls-panel">
      <h3>Controls</h3>
      <p style={{ fontSize: '0.9em', opacity: 0.7 }}>
        Shortcuts: Space (play/pause), B (brain), D (paths), E (electrical)
      </p>
    </div>
  )
}