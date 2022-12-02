// 立即运行函数
// window
// 外层this
(() => {
    // 不会分配this
    console.log(this);
})()