import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/mock/index'  // 模拟数据
import { createPinia } from 'pinia';
import {
  Swipe,
  SwipeItem,
  Lazyload

} from 'vant';
import  'vant/lib/index.css'
import 'lib-flexible/flexible'   // 适配
import  './assets/main.css';

const app = createApp(App)

// 先到位全家桶三件套
app
  .use(router)
  .use(createPinia())
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .mount('#app')
