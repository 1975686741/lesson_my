- 手写js底层 Promise相关  多练手
- 面试沟通技巧
- vue  深入MVVM  组件设计
- 数据可视化
  
- 项目亮点， 设计了XX通用组件

- 设计Modal组件 
    - 入职后工作  写组件、用组件、研究组件
- 组件
    - HTML6  WEB Component
    - 抽象能力
        - 需求-严谨-通用性
        - 如何让Modal 组件全局化？
            - Vue.use(Modal) 本质是 调用了install 方法 =》app.component(name, )
        - 如何发布到npm？
            - 一定的目录结构和要求
            - 因为 Modal 会被 app.use(Modal) 调用作为一个插件，所以都放在plugins目录下
    1. 组件设计
        - 好的组件一定是先设计的
        - 抽象
        - title + footer(button 取消 确定) + content(slot)
        - props title v-model  show  <Modal>content...</Modal>
    2. 需求分析
       1. 遮罩层    点击 退出modal
       2. 标题内同 
       3. 主题内容     
       4. 确定 取消 事件等
       5. typescript
       6. 国际化
    3. 实现流程