# vue3 商城管理后台  Admin

- mall 移动商城
    - 用户用的 移动端
    - vant + axios + 全家桶

- mall-admin
    - 给同事用的（小编、运营）
    - 上架商品
    - 上架活动
    - swiper    幻灯片的内容
    - 权限  同事

- 全家桶开发理解 

- vite是如何启动项目的  npm run dev 运行的流程
     1. package.json  script 脚本
        1. dev  development 开发阶段
        2. build    开发完了，打包上线做准备 dist/
     2. vite  工程化最快的工具
        1. index.html 作为首页在3000端口 以http-server 启动起来
     3. src/main.js  作为 单点入口文件
        1. vite的特别之处 script type="module" 让js支持es6的模块化
        2. 实例化 vue  app
        3. 并把App 组件挂载到 #app 节点上
     4. 基于模块依赖，把代码组织起来

- redirect 细节
     1. localhost：3000/    Http请求响应式的
         - index.html 已发送到浏览器并显示
         - App.vue 已挂载 
     2. router
        1. / redirect
        2. 发送 302   
        3. 根据跳转去到了下一个配置 /introduce
 
- header  + main.content 
- 导航栏nav App.vue   + router-view 页面级别组件

- 路由守卫
    1. 鉴权 
       1. to + token + login meta
       2. 在跳转的时候 要把 document.title + name 匹配的标题 utils  config.js
       3. layout  布局状态 login不需要侧边栏
       4. 用户直接从非 / 进入, 分享点击  
            state.currentPath = to.path

- 表单组件  
    1. el-form
    2. el-form-item
    3. el-input  
       容器组件  
       子组件 受控组件
   - label-position
   - :rules="state.rules" 在el-form 容器组件中统一设置  
       数组  每个input 的输入规则
   - :model="state.formData" 表单就为收集数据而来    
       `{  
         "username": ,  
         "password":   
       }  
       el-form-item props="username"
       `
   - ref="loginForm"  
       el-form 是组件也是对象 

- VUE登录
     1. 选择何种登录方案
         1. cookie(不安全)
         2. jwt
         3. tooken(主流)  服务器端签发，有效期，域名不同
         4. 前端在axios接口请求中，默认带上请求头  
             `axios.defaults.headers['token'] = getLocal('token') || ''`
     2. 使用 vue-router  在 app.vue 全局 
         1. 路由守卫  使用localStorage  + require  ->  login页
     3. 头像及昵称这些信息
         - /profile  API  登录   返回 { name, age, avatar}

- 用户信息 数据  页面显示的各种需求
     1. 当前组件请求，当前组件显示，私有状态  
         onMounted   async ->  await api  axios ->  state reactive -> bind 自动更新
     2. 共享用户数据，怎么办？  
         - pinia  托管一下  数据中央管理
             - 全家桶老三   pinia   银行 共享数据   
         - localStorage

- pinia 的使用流程   财务，更专业地管理共享状态
     1. 小型项目没有必要  就像银行
     2. 全家桶中的数据管理，较难
           1. main.js  入口文件  use() 启用 createPinia()
           2. user.js  用户状态模块  
                `  defineStore('user', () => {  
                    const profile = {}  
                    const setProfile = () => {
                    }  
                    return {  
                        状态的初始值，
                        修改这个状态的方法，走流程上报请求  
                    }  
                `  })  
            3. 使用共享状态的地方  
               1. useUserStore();
               2. 读这个状态  userStore.profile
               3. 写这个状态？ userStore.profile = {.....} NO  
               4. setProfile          
