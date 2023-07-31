# node的实战与考点
    - MVC 路由对象
        - MVC
            - view model 不能直接通信
            - controller 作为中间层，通信
            - controller 接受用户的需求，调用model层的数据，返回给view层显示(API),完成用户的需求
        - 逻辑，参数校验交给controllers
        - 路由的设计
            - restful 一切皆资源
            - 路由的功能
                - 中间件
                - require('koa-router')()
                - prefix 前缀   
                    - /api/v1 全局前缀
                    - /users  模块前缀

    - node js模块化是commonJS

    - 错误处理
        - 错误处理中间件，最后面
        - try catch
            - js是单线程，node.js单线程异步无阻塞，出错了要能继续跑下去
        - 自动重启