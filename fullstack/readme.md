- 前后端都会，拿1.5工资
- 全栈开发流程
    1. 前后端分离
    2. fastmock  api接口的伪造 + 前端的效果
           - 独立完成
    3. 切换后端身份
          1. http 协议  基于请求响应的协议
          2. node内置了http库
                   1. createServer 单例方法
                   2. 每次用户来都会执行
                   3. req.url  req 获得用户对象
                   4. res 服务器相应对象
          3. 3000 listen 
                1. http:// localhost    :3000     /detail  (以下对应)
                2. 协议 127.0.0.1 域名  接口程序   路径path   queryString
