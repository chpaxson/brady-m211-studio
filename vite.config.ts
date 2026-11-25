import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import bradySdkAssets from './src/plugins/vite-plugin-brady-sdk'

// Served from https://<user>.github.io/brady-m211-studio/ on GitHub Pages.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/brady-m211-studio/' : '/',
  plugins: [bradySdkAssets(), vue()],
  worker: { format: 'es' },
}))
