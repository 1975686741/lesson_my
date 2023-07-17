# snabbdom + vue 需求


- 编译原理 component -> template -> compiler -> h(三个参数, babel 抽象语法树构建) -》 VNode + Renderer -》DOM树
    - `` 
            let a = 1;
            let b = 2;
            let c = a + b;
            词法分析 token 以树状结构组织   所有代码形成 AST抽象语法树
        ``

- h（）函数   模式
    - 返回的VNode设计 
    - 参数  三个  tag data children

- VUE源码学到了什么？
    - 处处都是性能优化
        - VNodeFlags ChildrenFlags
            - 位运算 & 
                - render 到底是走DOM API 还是Component
                - render 位运算& 
        - element VNode 真实dom
    - 模块化
        - flags配置  单独放
        - reactive
        - compiler
        - renderer
    - 测试驱动开发
        - 实现一个小目标 =》慢慢推进 =》大目标
    - 面向对象设计
        - Component组件设计
            - 继承
                - render必须有（vue2.0）
                - 基类 throw error
