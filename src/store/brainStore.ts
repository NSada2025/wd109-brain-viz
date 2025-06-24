import { create } from 'zustand'

interface BrainState {
  // Visibility controls
  showBrain: boolean
  brainOpacity: number
  showDopaminePaths: boolean
  showElectricalActivity: boolean
  
  // Animation controls
  animationSpeed: number
  isPlaying: boolean
  currentTime: number
  
  // Selected regions
  selectedRegion: string | null
  highlightedPath: string | null
  
  // Actions
  toggleBrain: () => void
  setBrainOpacity: (opacity: number) => void
  toggleDopaminePaths: () => void
  toggleElectricalActivity: () => void
  setAnimationSpeed: (speed: number) => void
  togglePlayPause: () => void
  setCurrentTime: (time: number) => void
  selectRegion: (region: string | null) => void
  highlightPath: (path: string | null) => void
}

export const useBrainStore = create<BrainState>((set) => ({
  showBrain: true,
  brainOpacity: 0.3,
  showDopaminePaths: true,
  showElectricalActivity: true,
  animationSpeed: 1,
  isPlaying: true,
  currentTime: 0,
  selectedRegion: null,
  highlightedPath: null,
  
  toggleBrain: () => set((state) => ({ showBrain: !state.showBrain })),
  setBrainOpacity: (opacity) => set({ brainOpacity: opacity }),
  toggleDopaminePaths: () => set((state) => ({ showDopaminePaths: !state.showDopaminePaths })),
  toggleElectricalActivity: () => set((state) => ({ showElectricalActivity: !state.showElectricalActivity })),
  setAnimationSpeed: (speed) => set({ animationSpeed: speed }),
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentTime: (time) => set({ currentTime: time }),
  selectRegion: (region) => set({ selectedRegion: region }),
  highlightPath: (path) => set({ highlightedPath: path }),
}))