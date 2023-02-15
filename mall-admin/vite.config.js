import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// es6 模块化 
import { resolve } from 'path'
// 文件 路径 属于哪个板块？ os io模块 
console.log(
  __dirname,
  resolve(__dirname, 'src')
)
// alias 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径别名
  resolve: {  // 用来拼接路径
    alias: {
      '@': resolve(__dirname, 'src')  //  __dirname 当前文件所在的绝对路径
    }
  }
})
