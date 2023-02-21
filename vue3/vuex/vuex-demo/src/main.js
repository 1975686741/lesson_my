import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)


app
    .use(store) // install  去扩展 vue的this  在原型链上加一个$store 指向 store
    .mount('#app')
