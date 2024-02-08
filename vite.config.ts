import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.vue', 'css', 'scss'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
