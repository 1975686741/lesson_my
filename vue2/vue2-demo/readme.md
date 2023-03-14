# vue2.0 语法

- 公司用react，但是只会vue怎么办？
    1. vue和react都是当下最好的 MVVM 开发框架
          1. 都是组件化开发思想 和 数据驱动思想
    2. vue3.0之后 composition API 和 hooks函数编程，两个越来越像
    3. 当时选择vue作为主要开发框架，相信自己如果做react也可以很快熟悉

- vue2.0和3.0有何区别？
    1. 面向对象编程 和 函数编程
          1. compositon api + setup 语法糖
          2. 代码风格不用为了面向对象而面向对象， this基本不用，composition api 很好用
    2. hooks编程， useRouter useStore
    3. 老版本项目切换回去也很快，目前主打学习vue3.0，要学2.0也会很快

- 在工程化的思维下，开发vue项目的本质是？
    - 写的代码不一定是最后运行的代码
    1. vue项目是以 .vue的组件为主
       1. template style script 三明治
    2. 工程化的思维下使用相应的loader，将代码编译为浏览器可执行的js css文件
       1. vue-loader 处理 .vue后缀的文件
       2. style部分，交给 css-loader style-loader stylus-loader
       3. script + template部分  js编译交给 babel-loader
          1. vue-loader  MVVM {{}}  state
          2. vue3.0 支持setup API
          3. vue2.0 只能支持类式编程
    3. 