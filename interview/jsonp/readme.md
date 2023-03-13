- json with padding

- 跨域
    1. 以后，服务器端脚本   api.baidu.com/say 后端接口域名；www.baidu.com 前端域名  跨域了
    2. 只要协议 域名 端口 不一样，都叫跨域  严格
    3. 跨域不是跨domain（域名），cross origin 跨origin = domain + 端口 + 所用的协议  是它的超集
    4. 安全，双方   
          1. 前端 不信任后端返回的资源
          2. 后端 NO ACCESS 
    5. 跨域却是常态！前后端分离是主流
    6. 大公司的协作 api.baidu.com  ai.baidu.com   

- 浏览器会自动进行CORS 通信
    - 实现CORS通信的关键是后端
    - 只要后端实现了CORS 就实现了跨域
    - 服务器设置'Access-Control-Allow-Origin', '*'  后端很难受
    - 白名单 黑名单

- 什么是同源策略及其限制内容
    - 同源策略是一种约定 是浏览器最核心 也最基本的安全功能
    - 如果没有，浏览器很容易收到XSS,CSRF攻击
    - JS里不能执行 非同源的代码
    - COOKIE localStorage  origin 沙箱隔离
    - DOM 节点
    - AJAX 请求 js内容 CORS