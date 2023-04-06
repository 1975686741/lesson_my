import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'// js 一样引入css  webpack vite 工程化 一切资源皆可打包

const app = createApp(App)

app
    .use(store)
    .use(router)
    .mount('#app')
