# 大前端项目
    - 后端 难点介绍
       1. 大文件上传 处理视频或音频
       2. 后端使用MVC 设计模式
             1. 入口文件安排 跨域 bodyParser(post请求处理的中间件) 鉴权 数据库连接 路由中间件 错误处理中间件
             2. 路由 交给controller  负责参数校验和逻辑
             3. controller 交给service 负责数据存储
             4. middlewares 提供鉴权，参数校验，密码md5，等等函数
       3. 使用面向对象思想来组织代码
    - node 异步无阻塞
        - EventEmitter类  是很多IO操作的基类
        - node 的 eventloop 是IO操作的关键  提升性能
    - ES6 Class  仍然是原型式
        - fse -> fs -> eventEmitter
        - koa 的class extends EventEmitter
- 大文件上传的关键  
     用户体验
    - 切片
        - 大文件上传失败的概率大
        - prommise.all  并发  数组是有上限的
        - 后端 合并文件   二进制流
    - 断点续传
    - 秒传

- 如何用命令行测试文件上传
    - centos/ubunto + 命令行
    - cURL