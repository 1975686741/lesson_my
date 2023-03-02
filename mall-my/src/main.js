import { createApp } from 'vue'
import router from './router';   // 启动路由
import App from './App.vue'
import 'lib-flexible/flexible'  // 适配

const app =createApp(App)

app
    .use(router)
    .mount('#app')
