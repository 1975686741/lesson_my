# restfull api

- 前后端分离，restfull api  是接口定义的标准
- resouce 资源   
    - restfull 一切皆资源，如何暴露这些资源？
    1. 每个资源都有独立的链接 
    2. api 地址设计规则
          1. http://localhost:3000/posts + GET(http method的语义) 资源的读操作
          2. http://localhost:3000/posts/1  读 id 为1 的文章
          3. http://localhost:3000/posts 新增内容 post  