# 组件

- 从何而来
    - JS / DOM  API等 =》 JQuery（高效且兼容性好）=》template lodash compiler =》vue 三明治
    - html =》template  focus业务 =》数据驱动 =》reactive =》mounted + updated =》effect(compiler) =》vnode =》diff 前后状态的差异 =》 dom更新 

- 组件生成什么？
    - render template{{}}  v-if  :  产出vdom虚拟dom =》createElement
    - reactive  ref  setup
    - 生命周期 
    - VDOM
    - DIFF

- Component 类 函数 =》render =》真实的dom
    - 组件化思想 =》 reactive diff 数据驱动思想 =》最后 createElement

- 组件前世的本质 一个组件就是一个函数，给什么样的数据，就渲染对应的 html 内容。
    - Component(VDOM)
    - +
    - render 方法
- 组件的产出就是 Virtual DOM
    - 分层  平台无关性 VDOM -> PATCH -> HTML/WXML/XML都可以  实现SSR 在服务器端渲染
    - 性能优化 
        - 查找  比对   在内存中高效地收集差异

- 函数式组件(Functional component) 和 有状态组件(Stateful component)。
    - 函数式组件 展示为主     props
        - function MyComponent(props) {}
        - 纯函数  一个props状态对应唯一的template
        - 没有自身的状态，直接收外部的数据
        - 产出VNode的方式 单纯的函数调用
    - 有状态组件  数据业务 父组件来做 
        - class MyComponent {}
        - 是一个类，可实例化
        - 可以有自身状态
        - 产出 VNode 的方式：需要实例化，然后调用其 render 函数

- 组件是怎么挂载到页面上的 VNode + Renderer 
- 当更新时，组件是如何将effect 
- 真实DOM 和 VDOM
    - tag, props({class: "sd", id: "11" }), children: []
    - Fragment  document.createDocumentFragment  性能优化组件
    - Portal  制定目标地  弹出层
  
- flags设计
    - 优化手段  不需要每次都判断
    - 区分 VNode 是 html 元素还是组件亦或是普通文本
        1. 拿到 VNode 后先尝试把它当作组件去处理，如果成功地创建了组件，那说明该 VNode 就是组件的 VNode
        2. 如果没能成功地创建组件，则检查 vnode.tag 是否有定义，如果有定义则当作普通标签处理 html标签校验
        3. 如果 vnode.tag 没有定义则检查是否是注释节点
        4. 如果不是注释节点，则会把它当作文本节点对待

`` if (flags & VNodeFlags.ELEMENT) {
  // VNode 是普通标签
  mountElement(/* ... */)
} else if (flags & VNodeFlags.COMPONENT) {
  // VNode 是组件
  mountComponent(/* ... */)
} else if (flags & VNodeFlags.TEXT) {
  // VNode 是纯文本
  mountText(/* ... */)
} ``
如上，采用了位运算，在一次挂载任务中如上判断很可能大量的进行，使用位运算在一定程度上再次拉升了运行时性能。

- 二次更新渲染细节
  - 如何更新 首先如何比对节点
    - 比较tag
      - tag类型都不一样  直接replace
    - 比较data
    - 比较children
- vue源码中学到了什么？
  - 模块化,职责划分
  - 尊重 对方的接口参数返回值
    - 一个函数/文件只做一件事
    - h.js
    - render.js
      - patchData.js
      - diff.js
- 虚拟DOM比真实DOM快这句话其实是错的，或者说是不严谨的。那正确的说法是什么呢？虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM，虚拟DOM和虚拟DOM算法是两种概念。虚拟DOM算法 = 虚拟DOM + Diff算法

Vue使用虚拟DOM（Virtual DOM，简称VDOM）的优点主要有以下几个：

增量渲染：VDOM可以通过比较前后状态差异来高效地更新视图，从而实现增量渲染，避免了全量重绘的开销。

平台无关性：VDOM是一个抽象的概念，可以在不同的平台上实现，例如浏览器、Node.js等。

组件化开发：Vue将组件作为基本的构建单元，每个组件都有自己的VDOM，这样就可以将视图和业务逻辑分离，提高了代码的可维护性和复用性。同时，由于VDOM是独立于平台和具体实现的，因此也增强了组件的可移植性。

提高了开发效率：通过VDOM，我们可以只关注数据的变化，而不必手动操作DOM，大大提高了开发效率。另外，在需要频繁操作DOM的场景下，VDOM也可以帮助我们避免一些常见的性能问题，例如频繁地读写DOM属性。

可以实现跨平台开发：由于VDOM的特性，Vue也可以通过一些工具进行跨平台开发，例如通过Weex来实现Web、iOS、Android等多个平台的开发。