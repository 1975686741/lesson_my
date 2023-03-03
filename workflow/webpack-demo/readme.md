# 前端工程化

- npm init vite
    - 使用vite工程化套件，完成了项目创建的流程
    - src 是开发目录
    - main.js  入口文件
    - index.html #root 挂载点
    - server服务器在某个端口上  index.html进入首页

- webpack
    - npm init -y   把js项目变成node后端项目  工程化依赖后端，不是在浏览器端运行的，而是在服务器端
    - npm i webpack  webpack5  企业级的工程化套件
    - webpack.config.js   配置文件

- 启动webpack  修改package.json里的脚本  "build": "webpack --mode=development"

- 根目录里找有没有一个叫webpack,config.js的文件  按配置运行
    - webpack-cli  命令行工具