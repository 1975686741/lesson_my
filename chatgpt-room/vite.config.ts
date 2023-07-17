import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//找不到模块“path”或其相应的类型声明 npm install @types/node
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src/components')
    }
  }
})
