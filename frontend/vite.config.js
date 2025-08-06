import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'
  },
  // 👇 isso aqui é o que resolve o 404 definitivamente
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // 👇 fallback para SPA
  optimizeDeps: {},
  base: '/',
})
