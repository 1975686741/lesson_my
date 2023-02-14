# 函数篇

- 函数记忆功能
    1. 函数的参数或函数的返回值也是函数的话，我们称之为高阶函数
        memorize 高阶函数
    2. 闭包
    3. 巧妙地利用缓存，提升性能的关键

- 闭包是如何形成的？
    1. 函数嵌套函数，且运行

- 记忆函数
    - 用空间换时间 cache{}
    - 缓存的查找 使用key
        - arguments.lengthd + Array.prototype.join.apply(this,arguments)
        - 不能处理对象是参数这种情况   
            - {Object, Object} join本质，会先toString
        - memorize 函数需要优化