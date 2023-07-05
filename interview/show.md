# 展示点

- cookie 或者本地存储
    - httponly  防止xss跨站脚本攻击
        - 默认是js也可以读取 =》功能会受到XSS攻击（网页中植入一段代码，把cookie读取发送到黑客，获取了身份）
        - true 只在http请求过程中传递
        - session_id这种cookie 肯定要设置，username等js需要访问的 安全性没问题的业务cookie不设置
    - secure
        - 只有是https的可靠链接才会发送

- 本地存储
    - cookie过期时间，每次请求都会传输，要考虑性能和安全问题
      - localStorage一直都在，只存在客户端，默认不参与服务端的通信
      - sessionStorage 关闭就没有
    - cookie最小 4KB
        - localStorage 5M
        - IndexDB  数据库 更大
    - sessionStorage 表单业务  优化体验


- 同源策略
    - 沙箱，一种安全机制，用于隔离不受信任的代码
    - 跨域