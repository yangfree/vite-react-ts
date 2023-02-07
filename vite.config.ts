import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function resolvePath (dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置项目别名
  resolve: {
    alias: {
      '@': resolvePath('src'),
      '@css': resolvePath('src/testcss')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
