# 十万条数据怎么渲染
     - 性能优化相关内容
     - 分页 

- setTimeout setInterval 不一定准确
      - 如果在setTImeout到点了，js线程或渲染线程没有清空，只有等！
      - JS执行栈 》 微任务 》 渲染线程 》 宏任务

- 又快又好地渲染十万条数据？
    1. JS能优化的地方优化
          1. 页面是白的  CPU的轮转 unit time 最大可运行时间
          2. 1000 + 立马渲染一次 最快的看到页面
    2. 渲染时间
          1. 分片

- 性能瓶颈在渲染
    - 其他线程得不到执行机会，卡死
    - 滚动滚轮  页面会很卡
    - 让浏览器进入 idel状态  渲染线程10w+放手
    - 