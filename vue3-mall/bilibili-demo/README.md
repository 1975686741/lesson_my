# 项目实战开发的点位

- 写一个面试官喜欢的项目
- 路由配置安排好 5个页面
    首页 详情页  登录页面 搜索页  tab level 1
- 安排的能力点
    - 路由 懒加载 meta 路由守卫
    - 防抖节流 + localStorage 搜索
    - 组件化能力
    - mockjs 假接口

- vuex / pinia  重难点
    - 搭好架子  pinia 更直观
        1. 数据由中央管理
              1. 本地组件 onMounted生命周期 + api + reactive
              2. (state) 私有状态
              3. pinia 全局状态
                    1. root state  -> modules  ->  defineStore

- 项目的数据管理 流程
    1. 接口请求不再属于页面
          1. 状态都不属于组件了，请求也不属于
    2. mock 数据到位
    3. 定义好接口
    4. store 对象
          1. 在store 建一个文件
          2. defineStore  方法，返回state的初始值
          3. 页面上去把状态state读出来，让状态从中央到本地
          4. 请求接口数据
    5. pinia + 父子组件 props + emit
    6. 对界面效果降级，基于组件的还原