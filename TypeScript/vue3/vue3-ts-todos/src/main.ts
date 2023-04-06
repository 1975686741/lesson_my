import { createApp } from 'vue'

import App from './App.vue'

// 接口    ; 隔开
// PostStatus 0 draft 1 发布 2 首页 -1 删除

// 枚举 类型
enum PostStatus {
    Unpublished,
    Publish,
    Draft
}
interface Post {
    title : string;
    content ?: string;
    status : PostStatus;
}
let post:Post = {
    title : 'One Day',
    content : '字节面试Go!',
    status : PostStatus.Unpublished
}

createApp(App).mount('#app')
