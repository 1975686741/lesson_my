import { defineConfig } from 'vite'
import {fileURLToPath,URL} from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:8090
  },
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        math:'always'
      }
    }
  }
})