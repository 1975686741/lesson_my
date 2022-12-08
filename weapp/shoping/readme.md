# 从代码到能力的转变

- 把一个项目完整地走一遍
    不写代码 读代码     理解小程序完整项目开发

- pages
    - components  比pages小比标签大
        组成页面的组件
        把一部分页面的功能分离，有利于以后的复用
    - 标签   view div p ...

- component 语法重点
    1. 思想
        组件看过去复杂，封装一次，多次复用，到处使用
    2. 地位
        组件仅次于页面，是高级使用技巧
    3. 创建
        和页面差不多
    4. 引入
        页面要使用组件，需要引入 usingComponents  /根目录
    5. properties  属性
        page 和 components 通信的约定 {
            type: Array   类型
            value: []   默认值
        }
        <w-tab-control title="" bind:>
        bind:  绑定事件
    6. 私有属性
        data  自己的运转
    7. 向外通信
        this.triggerEvent('event_name', {index:1});

- scroll-view
    1. 移动端页面优先考虑scroll-view
        可滚动内容的容器
    2. scroll-top  0
        回到顶部
    3. bindscroll
        滚动事件  频繁
    4. bindscrolltolower  滚动底部 加载更多
       bindscrolltoupper  滚动顶部
    5. scroll-with-animation 配合 scroll-top 0 慢慢上去动画过程

- 数据请求事项
    1. 找到生命周期
     onLoad最适合
    2. 不要在onLoad里写太多代码，有可能很多事情要做，用函数封装
     取数据的  getData  fetchData ...
    3. 高手还会把 数据请求 模块化独立于Page
        service 网络服务  新的目录  专门放网络请求
    4. 模块化  import...from