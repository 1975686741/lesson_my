# 虚拟列表

- 假如有10万条数据，如何渲染？
    - JS执行时间
        - DOM编程 createElement appendChild 同步的
        - 太多 会超过JS 单元执行时间  所以会很卡
    - 渲染时间

    -分片机制 时间分片
        - reqeuestAnimationFrame    宏任务
        - requestIdleCallback  react fiber  微任务 构建大的DOM树
    - 如何查看开销时间？
    - 如何去看浏览器的面板和优化建议

- 分片机制和时间分片技术可以帮助我们更加高效地处理和传输大数据量或复杂任务，提高计算机系统的性能和效率

- 同步的console.log()  JS单线程
    - 尽快执行完 进入idle阶段
    - requestIdleCallback API 来分片处理复杂的 JavaScript 计算，以避免阻塞主线程，提高页面的响应速度和用户体验。  unit time 单位运行时间
    - setTimeout(, 0) 定时器在浏览器中不准确
    - 渲染时间
        - chrome的performance面板可以直接提供

- 虚拟列表
    - getBoundingChilentRect()
    - 仅在可见区域内渲染 DOM 元素 + onscroll 响应式的 startIndex endIndex