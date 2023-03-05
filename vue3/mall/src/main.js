import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { // 按需加载vant 组件
  Swipe,
  SwipeItem,
  Skeleton,
  Lazyload,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Form,
  Field,
  Button,
  Icon
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible' // 移动端适配
import './assets/main.css' // reset
import router from './router' // 启用路由

// - 启用全家桶 
//      router
//      store
// 
// reset? 准备
// html  fontSize? rem 自适应

const app = createApp(App)

app
  .use(createPinia())
  .use(Icon)
  .use(Swipe) // 
  .use(SwipeItem) // 
  .use(Skeleton) // 
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(Lazyload)
  .use(router) // SPA

// vue 过滤器 
app 
  .config
  .globalProperties
  .$filters = {
      prefix(url) {
        if (url && url.startsWith('http')) {
          return url
        } else {
          url = `http://backend-api-01.newbee.ltd${url}`
        }
          // console.log(url);
          return url
      }
  } 

app  
  .mount('#app')
