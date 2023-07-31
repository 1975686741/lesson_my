import { createApp } from 'vue';
import { createPinia } from 'pinia';
// ElementPlus  Icon分离 有利于最后生成的文件大小和自由度
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import './assets/css/icon.css';
import { usePermissStore } from './store/permiss';

const app = createApp(App);
app
    .use(createPinia())
    .use(router)
    .mount('#app');

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 把这个组件挂载在全局
    app.component(key, component);
}

const permiss = usePermissStore()
// 自定义指令   v-permiss
app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true
        }
    },
})