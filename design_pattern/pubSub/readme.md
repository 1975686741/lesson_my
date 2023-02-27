# 订阅发布者模式

- vue 响应式使用的模式

- vue
    - const count = ref(0)  发布了一下，生成一个发布者 只有一个
    - {{count}} 订阅了一下  订阅者
    - <Child :count="count" />  订阅了一下 订阅者
    - const len = computed(() => count*2)  订阅者又订阅了一下

- 订阅发布者模式  
    1. 首先给发布者维护一个订阅者数组  listen
    2. clientList 数组
    3. 如果有消息，怎么通知他响应？ -》 放一个函数
    4. trigger方法  通知订阅者响应