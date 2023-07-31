- ts -> js 才能运行
    -  typescript  tsc
    -  tsc-watch  热更新  "dev": "tsc-watch --onSuccess \"node dist/main.js\""
    -  tsconfig.json  exclude
    -  @types/express  类型声明文件

- 新的架构
- dotenv 解决安全问题
    - 敏感信息放在 .env中
    - dotenv.config()
        - node操作系统
    - process.env  解析出来
    - .gitnore中添加 .env 不上传
    - 在信得过的同事间共享

- 介绍一下HTTP状态码  相应的场景
    - 1XX  消息状态码
        - 100：Continue 继续。客户端应继续其请求。
        - 101：Switching Protocols 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议。
    - 2XX  成功
        - 200：OK 请求成功。一般用于 GET 与 POST 请求。
        - 201：Created 已创建。成功请求并创建了新的资源。
        - 202：Accepted 已接受。已经接受请求，但未处理完成。
        - 203：Non-Authoritative Information    非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本。
        - 204：No Content 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档。
        - 205：Reset Content    重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域。
        - 206：Partial Content     部分内容。服务器成功处理了部分 GET 请求
    - 3XX  跳转/重定向状态码
    - 4XX  用户端/客户端出错
        - 400 Bad Request  客户端请求的语法错误/用户没有按要求完成，服务器无法理解。
        - 401 Unauthorized 请求要求用户的身份认证  | 未登录
        - 402：Payment Required 保留，将来使用。
        - 403：Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求。| 登录了但没权限
        - 409：Confilt  冲突，服务器处理请求时发生了冲突 | 注册时，用户名别人注册了
    - 5XX  服务器端出错

- 错误处理中间件
    - 应用中最后的中间件是错误处理中间件
        - 错误无处不在  js的单线程 带宽和服务器的性能 硬件
        - 四个参数
            - errpr是第一个
            - next(new Error(""))   只有错误处理中间价才能处理

- NODE企业级开发思思路
    - 中间件开发模式
        - npm  通用中间件
            - cors  json()  bodyParser()...
        - 路由中间件/错误处理中间件
        - 进入到路由的业务处理也用中间件模块化处理
            - Router =》参数校验 =》功能1 =》功能n =》数据库操作 =》返回
    - HTTP 状态码标准

- 架构
    - 每个路由模块中
        - xxx.router.ts
        - xxx.middleware.ts
        - xxx.controller.ts
        - xxx.service.ts  数据库业务
        - xxx.model.ts

- TDD 表达
    1. blog 项目
    2. 登录鉴权模块
    3. 测试驱动开发，敏捷开发方式
    4. 举出一个个的测试用例，并编码通过，
          1. 全一点，全力通过测试用例
    5. 严谨专业，自动跑测试的项目  企业级开发的标配，运维思想
          1. 每次上线前跑通所有的测试用例