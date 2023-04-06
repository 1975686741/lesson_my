# 手写JSONP

- 跨域
    - 后端的处理
         1.  CORS通信    AJAX 同源策略  
                Access-Control-Allow-Origin  
                res.header('Access-Control-Allow-Origin', '*')
         2. 不受同源机制限制的 script标签
               1. <script scr="外网地址"></script>
               2. img  link ...   链接外界的静态资源

- CORS Policy 
    - cross-origin-resource-sharing  跨域资源共享
    - 为了安全性 
        - 企业内部，一个企业不止一个域名
        - 前后端分离  前端3000 后端5500   跨域是常态
        - CORS方案 适合比较保守的跨域解决方案  
            公司内部或者友商
        CORS 抽象的中间件叫cors

- script 门户开放型
    - 开放给全网用
    - origin 起始 在用户的浏览器端  绕过同源策略
   1. script 可以请求跨域资源，不受永远策略的影响，前提是返回js
   2. 提前埋好callback 回调函数  
         1. 返回的js会执行
         2. json资源 外面包一个函数，成为js函数调用