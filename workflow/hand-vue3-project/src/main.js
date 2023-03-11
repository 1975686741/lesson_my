// console.log('Hello');
// import App from './App.vue';  // 引入App.vue 但是目前.vue文件无法识别

// const root = document.getElementById('root')
// root.textContent = 'Who are U?'

import { createApp } from 'vue'  // 依赖关系的打理
import App from './App.vue'
import  './assets/a.png'    // 一切静态资源都可以打包


const app = createApp(App)

app.mount('#root')