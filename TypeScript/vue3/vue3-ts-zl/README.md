

# proxy 代理  解决跨域问题
- 服务器端接口已上线，本地通过proxy解决跨域问题
    - 前后端分离
    - 开发前要按约定的接口文档来模拟 mockjs 或 online fastmock
    - 分头开发前，在一起约定接口文档 哪些接口 /api
        - restful url params qs json 返回是什么
        - 等前端后端都独立写完的时候，前后端联调   本地的axios baseURL => serverUrl

- vite.config.js  可以帮我们的前端请求做代理
- nginx 高性能服务器，负载均衡服务器  服务器集群的IP地址和忙闲算法，也是一个代理服务器 :3000 proxy 到 :80
    - http://localhost -> http://localhost:80 默认80 -> nginx代理到 -> http://localhost:3000 
    -  /api/column  -> http://localhost:3000 -> proxy -》http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3 跨域
