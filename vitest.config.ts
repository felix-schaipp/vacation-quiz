import { mergeConfig } from 'vite'
import viteConfig from './vite.config'
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: ['./src/**/*.test.{ts,mts,tsx}'],
      exclude: ['./src/assets/**', './dist/**', './node_modules/**'],
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      alias: {
        '@': resolve(__dirname, './src'),
        '@/components/*': resolve(__dirname, 'src/components/*'),
        '@/helper/*': resolve(__dirname, 'src/helper/*'),
      },
    },
  }),
)
