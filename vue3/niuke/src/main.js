import { createApp } from 'vue'

import App from './App.vue'
import {
    Swipe,
    SwipeItem,
    Toast
} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app
    .use(Swipe)
    .use(SwipeItem)
    .use(Toast)
    .mount('#app')
