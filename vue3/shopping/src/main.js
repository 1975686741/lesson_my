import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/mock/index'
import { createPinia } from 'pinia'
import {
  Swipe,
  SwipeItem,
  Search
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible' //适配rem
import './assets/main.css'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(Swipe)
  .use(SwipeItem)
  .use(Search)
  .mount('#app')
