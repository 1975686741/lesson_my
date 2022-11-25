- 请介绍下 var let const
     1. es6以前，用 var 声明变量，那个时候没有常量
        let const 是es6（2015）的变量和常量
     2. var let 变量声明
        const 常量 如果是复杂数据类型，值还是能变的
     3. let 支持块级作用域
     4. var 中声明的变量会挂载在window全局对象上，会污染全局
     5. var 声明变量会提升到所在作用域最上面（声明的提升，undefined）不会报错
        影响代码的可读性
        let  不会提升
        function  声明的函数，会提升，值也会提升
        const func = function() {}
     6. var 和 function写在全局作用域会覆盖、重写window的属性和方法，这是最不好的。let放在全局作用域也不会影响window对象

