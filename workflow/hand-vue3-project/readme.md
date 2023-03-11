# 前端工程化

- 为什么要有工程化
    - 把stylus es6+ typescript 全部引入项目中使用

- webpack 5
- vue 3

- npm init -y
    - 初始化项目为Node后端项目
    - 项目描述文件  package.json
- npm i -g yarn （安装到全局）
- npm i webpack  安装到当前项目（本地）
- yarn
    - npm的代替品，来自facebook
    - npm i === yarn add
- yarn add webpack -D
- 工程化在代码的开发阶段
    - development  代码开发阶段,使用 vite、webpack、babel 搭建开发阶段的脚手架
        - npm i webpack -D   -D目前还在开发阶段
    - test  测试阶段
    - production   上线阶段 vue

- 工程化的套件 devDependencies
    1. webpack webpack-cli  -5
    2. src 开发目录
         - main.js  入口文件
         - index.html 根目录下的首页， 里面有root挂载点
    3. 如何让web-server 在 :8888端口下  html显示
    4. main.js
          1. createApp   App.vue 根组件
    5. "dev" : "webpack --mode=development",
          1. 启动webpack工程化，为代码开发做准备
          2. webpack-cli --mode=development 命令行参数
          3. webpack-dev-server 在webpack编译的同时，启动web server
          4. npm run dev
          5. webpack webpack.config.js(告诉webpack应该怎么做)

- webpack 配置
    1. 最低配，最基本的就是 entry output的概念

- loader的重要概念
    - 在webpack entry 到 output 中间
        - module匹配每个规则

- webpack-dev-server
    - 为了性能，会把代码放在内存中

- hash?
    - 根据文件内容进行计算，会得到一个唯一值,留下打包历史
    - 为了防止浏览器的缓存 clean-webpack-plugin 清空一下 

- --mode=
    - development   开发阶段
    - production    上线阶段，代码压缩   文件全变成一行，传输越小越好

- vite 完胜webpack
    - 更快  启动快 重新编译快
    - vite使用了 Go(rust) 代替Node 编译
    - webpack虽然慢一点，但是生态更加成熟

- babel 是什么？
    - JS的编译器  正因为babel，es6+ 才跟大胆地使用起来
    - @babel/core  babel的核心库
    - @babel/cli  babel的命令行
    - @babel/perst-env  babel的预处理方式   preset