import { createApp } from 'vue'
import App from './App.vue'
import { // 按需加载vant 组件
    Lazyload,
    Swipe,
    SwipeItem,
    Icon,
    Button,
    CountDown,
    Skeleton
} from 'vant'
import 'vant/lib/index.css'
import './assets/main.css'  // reset 
import 'lib-flexible/flexible'  // 移动端适配就做好了
import router from './router' // 启用路由

// - 启用全家桶
//     router
//     store 
// 
// reset?  准备
// html  fontSize? rem 自适应 
const app = createApp(App)

app
    .use(Swipe)
    .use(Icon)
    .use(Button)
    .use(CountDown)
    .use(Skeleton)
    .use(SwipeItem)
    .use(Lazyload)
    // .use()
    .use(router) // 当我们在做SPA 路由接管一切  pages -> 组件 

// 全局过滤器
// app.config.globalProperties.$filters = {
//     prefix(url) {
//       if (url && url.startsWith('http')) {
//         return url
//       } else {
//         url = `http://backend-api-01.newbee.ltd${url}`
//         return url
//       }
//     }
//   }

app
    .mount('#app')

