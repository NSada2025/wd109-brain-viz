import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['three']
  },
  base: '/wd109-brain-viz/', // GitHub Pagesのリポジトリ名
  server: {
    host: true,
    port: 5173,
    open: false
  }
})