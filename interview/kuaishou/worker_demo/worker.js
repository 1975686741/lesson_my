// worker里面不能操作dom api
// 页面发消息
self.addEventListener('message', (event) => {
    const message = event.data
    const result = message + 'world'
    self.postMessage(result)
})