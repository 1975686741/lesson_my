- 小程序能拿到dom api吗？
    - 大程序 相对于大厂的APP，依附与他们的
- ios/android  原生开发中，商品的详情页
    - webview的控件，带url的html页面显示
- 为了把开发效率提升，基于webview 基于vue的可以跨平台的应用程序
    - html体验不太好
- wxml wxss js  前端开发的体验，跨平台编译成app能显示的小程序
- wx. 拿到原生app 的功能
- 拿不到dom的api

- 原生 小程序   微信小程序 缺点   拿不到dom api
    - 有学习成本 内置api很多
    - 功能受限：原生小程序只能使用微信提供的 API 和组件
    - 开发难度高：原生小程序采用的是不同于 Web 前端开发的技术，需要掌握独特的框架、语言和工具。
    - 用户粘性低：原生小程序不能在其他应用之间共享链接
    - 可扩展性差
    - 版本管理困难：由于小程序运行在微信客户端中，更新版本需要用户手动执行更新流程

- taro
    - canvas  小游戏/three.js   webAR/VR

## 快手二面
    深入的工程化

    - css代码的分离
        - 更好的缓存
        - 下载的速度更快  
        - MiniCssExtractPlugin 插件
    - 怎么再优化一下？
        - CSS压缩
        - tree shaking    webpack5默认在production mode里开启
            - 注释，console.log()调试，没有使用变量或函数，模块中没有用到的代码
    - code spliting
        - vendor

- 图片怎么优化，webpack如何结合
    - 减少请求数，小图片转base64格式