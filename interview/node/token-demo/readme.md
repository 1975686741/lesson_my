# 前后端登录完整流程

- 后端签发令牌环
    1. web服务器启动起来
        1. https
        2. web 即资源  restful  后端路由
    2. /login  POST
    3. /api 校验token有没有随着header发送过来  
        token 能不能和用户相关  是否过期？
    4.   