# vue 集训一

- vue3.0 + pinia + ts 
- node + mysql
- vue2.0

- 路由ts规则
    1. ts是为了代码的正确性
    2. createRouter()   需要传一个RouterOptions  ts类型约束
   
- typescript通过类型约束，可以让所有人写的代码一致
    - ts多了一些代码量，看上去有点难，实际上对新手很友好  
    - js代码太随意，原因是没有类型约束的，弱类型语言
    - 企业级开发，ts就非常重要了

- store的ts规则
    1. 数据管理非常重要，要约束数据  todos
    2. type Todo = ......  声明一个数据的自定义类型
          1. id
          2. text
          3. isComplete
    3. pinia 响应式的状态
          1. Ref类型，

- npm i nanoid  生一个唯一id  引入然后 id:nanoid()