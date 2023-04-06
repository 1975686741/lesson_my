# Promise A+ 规范

- https://juejin.cn/post/6952083081519955998
- Promise 是一个类 有then catch resolve reject all 等方法
- 传一个参数，函数  executor 立即执行
- excutor 有两个参数: resolve reject
- 三个状态 pending fullfilled rejected
    - pending,可以转化为fullfilled 和rejected。不可以多次执行同一个promise
    - 成功时，不可转为其他状态，且拥有一个不可改变的值
    - 失败时， 不可转为其他状态，且拥有一个不可改变的原因
    - executor 报错，直接rejected
  
- then(onFulfilled, onRejected)
    - state 转化为fulfilled,this.value -> onFulfilled 运行
    - rejected this.reason -> onRejected 

- then
    1. 如果异步，存起来 当状态发送改变，执行
    2. 解决了回调地狱问题 
          1. 控制执行顺序 then 链式调用
          2. 前一个promise then 
          3. 怎么执行下一个then？ return promise