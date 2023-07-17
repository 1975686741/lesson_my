- tailwindcss
  - 引入
    npm i tailwindcss @tailwindcss/typography  
    npx tailwindcss init自动生成tailwind.config.js
  - 优化
    - 路由的懒加载
    - webpack5 treeshaking  
      从最终的打包文件中剔除未使用的代码，以实现更小且更高效的打包大小  
      函数  
    - 按需加载 
      ElementPlus 
      tailwindcss + typography  
  - 图标库
    npm i @icon-park/vue-next
  - 高亮
    npm i highlight.js
  - npm i markdown-it 解析markdown格式为html 
  
- 特点和难点
  - 使用了typescript封装了chatgpt的chat接口，使用数组维持最近三次上下文，让chatgpt更懂我们  
  - 使用了tailwindcss + typography 字体库
  - 图标库使用@icon-park/vue-next，全面支持composition-api
    聊天高亮使用highlight.js, markdown-it 解析markdown格式为html  

- ts 难点技巧
    - 在这个项目中，我逐步熟练了ts + vue3的写法
    - ref 响应式
    - reactive 响应式
    - api 接口
    - pinia 