import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// npm i @types/node 
// tsconfig.json里添加配置     "baseUrl": ".",
// "paths": {
//   "@/*" : [
//     "./src/*"
//   ]
// }
// },
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
})
