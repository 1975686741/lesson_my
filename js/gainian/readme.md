- 类数组
    有length属性，可以遍历,但是不具备数组的很多方法的对象子类型 
    如 Arguments  NodeList

    有length属性，可以遍历 的对象类型，不是真正的数组 

    不能调用数组的方法 

    对象的子类型

      - arguments  函数的内置对象 地位等于this
      - 如何把类数组转成真正的数组
          - 可以使用数组的方法
            1. 遍历一下 {}     push []到一个空数组     再for(let i = 0; i < length; i++)循环一下
            2. 切割 slice  1.js 
            3. Array.from   
            4. 展开运算符  let args = [...arguments]   2.js 
            5. concat + apply   3.js 
                 1. concat 返回值也是数组
            6. reduce  3.js
          - NodeList   在js tuntime中  div就是一个Node对象
          - map 把类数组变成一个 html的字符串数组  .join('')

- 如何理解reduce
    1. es6  map外  最高频数组api考点  
    2. for of  或技术循环太机械了  命令式编程
    3. map reduce filter every some   函数式编程
        1. useReducer()  reduce 把数组推掉
                ` ((prev, cur) => {
                    return prev + cur;
                  },0)
                `
    4. 函数式编程，可读性更强

- JS 判断数组包含某个值
    - 蹦出API来 是不友好的， 我们要做到 专业，准确且全面
    - indexOf
      - 4.js
      - 返回元素在数组中第一次出现的下标，从0开始，如果不存在，则返回 -1
    - includes
      - 5.js  
      - 数组中是否存在这个值，返回 Boolean值
    - find    reduce map
      - 6.js
      - 满足条件的第一个元素的值
    - findIndex
      - 7.js

- es6 设计箭头函数的原因
    1. this增加了代码的复杂性，对其他语言开发者不友好
    2. es6 设计的指导原则  ->  简洁优雅