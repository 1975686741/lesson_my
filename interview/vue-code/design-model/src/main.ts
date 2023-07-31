import { createApp } from 'vue'
import App from './App.vue'
import Modal from '../src/plugins/modal/Modal.vue'
// import { IConfig } from './plugins/modal'

const app =  createApp(App)

app
    .use(
        Modal as any,
        {
            style: {
                opacity: 0.5
            },
            props: {
                close: false,
                makeClose: false
            }
        }
    ) 
    .mount('#app')
