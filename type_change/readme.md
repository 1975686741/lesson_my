- js 类型知识点
   1.  7个基础数据类型 + 1个对象
   2.  typeof  null  object [object array]
       1.  instanceof {} ->  Object -> null
   3. js基于对象的面向对象？ new 
       1. Constructor + prototype
   4. prototype  继承
   5. 类型转换  隐式 + 显示  
   6. 0.1 + 0.2 != 0.3

- 请像学习this的规则一样，学习类型转换的规则

- js 弱类型语言，类型的转化系统
    - 字符串
    - 布尔值
    - 字符型
    - + ! * /  ===   隐式类型转换
- 由于js  神奇（莫名其妙）的类型转换
    - js 推荐使用===

- 显示类型转换
    - String()
    - Number()
    - Boolean()
    - 类型转换了，但是没有调用以上方法，偷偷地换了，隐式类型转换

-  + 小心，类型转换    字符串的拼接 数值的相加
   -  x + y
      -  + 左右两侧，任何一个是字符串，拼接  不是字符串的隐式类型转换为字符串
      -  如果左右任何一个是对象，这个对象(???得到字符串，拼接，另外一个转换成字符串   变成数值类型，相加了

- String() 强制类型的规则
    - 简单数据类型，和理解的一样 ''
    - 复杂数据类型，强制转成字符串的时候？  好几个规则
        - 对象字面量  [object Object]
        - 数组 [1,2,3] '1,2,3'    [] + {}
            - 会调用原型链上的toString 方法，并作为结果返回

- Number() 强制类型转换的时候
    - 简单数据类型 Number(undefined) NaN
        - Symbol() throw error NaN typeof number
    - 复杂数据类型 => Number
        - 先转换为基础类型 [1,2,3] => '1,2,3'
        - 再转换为number类型


- toPrimitive 
    1. 如果有valueOf方法，且是基础数据类型
        1. 对对象toPrimitive时，使用之
        2. [1,2] valueOf方法 本身
    2. 转而用toString() 方法
       1. 