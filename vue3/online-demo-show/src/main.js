import { createApp } from 'vue'
import App from './App.vue'
import './mock/index'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
