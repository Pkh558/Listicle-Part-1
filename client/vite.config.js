import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    proxy: {
      '/': {
        target: 'http://localhost:3001'
      }
    }
  }
})