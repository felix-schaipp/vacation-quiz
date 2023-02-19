import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components/*': resolve(__dirname, 'src/components/*'),
      '@/helper/*': resolve(__dirname, 'src/helper/*'),
    },
  },
})
