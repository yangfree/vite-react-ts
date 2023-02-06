import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function __resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置项目别名
  resolve: {
    alias: {
      '@': __resolve('src'),
      '@css': __resolve('src/testcss'),
    }
  }
})
