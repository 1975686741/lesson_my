# 抖音工资

    - baseSalary 22k  24k 12
    - ABCDS 四档  
        A   2
        B   3
        C   4
        D   6
        S   10 

## js 数据类型
    简单数据类型
        - number
        - string
        - boolean
        - null 空 定义了，但值为空
            为空，值为空
        - undefined 未定义 声明了变量(只声明)，但没有赋值
           类型为空
           内存空间 (undefined有地址，但地址的长度不定)  js是一种弱类型语言

    复杂数据类型
    - object
        除了简单数据类型，都是对象
        array [] 可遍历的对象
        object {} 对象字面量
        function () 可执行的对象

- 自学作业 typeof 
  可以获得变量的类型，但是不准确
    1. 对于基本类型，除null以外，均可以返回正确的结果
    2. 对于引用类型，除function以外，一律返回object类型
    3. 对于null，返回object类型
    4. 对于function，返回function类型
<!--
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
-->

## 函数编程素养
    - 写注释  代码即注释 即文档
    - 参数校验 代码的健壮性
    - 条理清晰
    - 用户体验 level = 'C'
