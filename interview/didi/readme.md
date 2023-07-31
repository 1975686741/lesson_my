# 滴滴实习

- 扎实的前端基础 20%高质量 完整度 惊喜讲出来
- 投递策略
    1. 定向投
    2. 投多个

- css布局
        - 需要的各种布局，从文档流脱离 -》两列/三列布局 -》新的BFC(弹性/网格) -》相对(定位) -> table布局
    - 流式布局  Flow 
        - 默认的布局方式，元素从上到下（块级元素）、从左到右（行内元素）
        - 常见的块级元素 div h123456 ul p headerfooter等
        - 常见的行内元素 button select input span a strong em textarea 
    - 浮动布局  Float 
        - 通过设置元素的float属性实现元素的左右浮动，使其脱离文档流并可以实现多列布局。
    - 定位布局
        - 通过设置元素的position属性，在父级元素中的位置即使改变也可以不变
    - 弹性布局  Flex
    - 网格布局  Grid
        - 复杂的行列网格布局，九宫格
    - 表格布局  Table

    - 三列布局
        - 块级元素默认从上到下
        - 脱离文档流或开辟新的BFC(flex, inline-flex, display:line但不可设置宽高 inline-block更好 元素间隙 设置font-size: 0)
        - 浮动
            - 圣杯和双飞翼布局
            - 中间列要能够宽度自适应  
            - 中间列要优先渲染
        - 弹性布局简单，缺点是兼容性不太好， 

- es6  新增 symbol bigint
    - 新的数据结构  Map/Set 相应的WeakMaP/WeakSet
    - js数据类型
    - 如何判断类型
    - symbol的用法，应用场景 
        - 对象属性名的定义
            - 大型多人项目中，确保不会覆盖原有属性或者方法
        - 不重要的属性不出现在对象遍历
            - Object.getOwnPropertySymbols()
        - 类的私有属性或方法
            - es6  目标js  成为大型企业级开发语言，需要提供private 能力 
            - 类的开发者使用者的解耦
                - 类的复杂化，开发者没有必要，隐藏一些复杂的细节，不能被调用者随便调用
                - 公有方法应该是简单的、好用的
                - 私有方法  难的，有规矩的，使用者没必要去搞的
                - Symbol()  使用者不可能去调用，加大了用户犯错的难度

- js判断类型的方法
    1. typeof   除了null 之外的简单数据类型 + function
typeof 123; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"   历史遗留问题
typeof {}; // "object"
typeof []; // "object"
typeof function() {}; // "function"
    2. instanceOf   用于判断一个对象是否属于某个类,只能用于判断对象类型，不能用于基本数据类型。
        - 构造函数在对象的原型链上
    3. Object.prototype.toString.call().slice(8, -1).toLowerCase()
    4. isArray  isNaN
    5. 之外，假如我们还要添加新的数据结构判断能力 isSet  isMap
    6. duck typing,如果一个对象具有某些方法或特征，那么就可以将其视为某种类型的对象
          1. length属性，可以被视为一个类数组对象, length是动态的

- Promise
    - 异步 node  异步无阻塞
        - 同步代码 瞬间执行完 + cpu 轮询
        - 异步代码 耗时的  不可能同步执行完 eventloop
    - js单线程  保证了语言的简单易学，无阻塞 callback执行顺序得不到保证  串行造成回调地狱
    - Promise thenable 链式调用 -》 async await  多行
    - 并行，提升性能和效率

- ngnix  
    Nginx是一个高性能、高可靠性、高扩展性的Web服务器和反向代理服务器，适用于大型分布式Web应用程序。
    它采用事件驱动的异步非阻塞处理方式，可以同时处理数千个并发连接，并且拥有较低的内存消耗和CPU使用率。
    Nginx最初是为了解决C10K问题而开发的，即在一个单一进程中同时处理成千上万的客户端连接。
    ``
        server {
            listen 80;
            location / {
                proxy_pass  http://localhost:3000
            }
        }
    ``

    2. upstream 负载均衡  ngnix  不负责应用 只负责调度, 算出哪台服务器空闲
        ``
            upstream backend {
                server backend1.example.com;
                server backend2.example.com;
                server backend3.example.com;
                server backend4.example.com;
                ...
            }
        ``

    3. https 配置
          1. 用户 -》 ngnix -》restful 资源
          2. 加载https  SSL证书 和 私匙

- 从输入URL 到页面显示
    - 提词器：网络  解析 渲染
    - 网络
        1. DNS 解析
            - 分布式数据库 KV缓存
        2. TCP连接
            - 三次握手  SYN  SYN/ACK  ACK
        3. HTTP
            - 请求头 请求体
        4. 服务器资源处理，相应用户内容
    - 渲染
        - HTML 解析
            - 解析成DOM树
            - 同时CSS/JS 解析加载也发生
        - CSS 解析
            - CSS规则（CSS OM树）与DOM树绑定起来，生成渲染(Rendering Tree)树
        - 布局和绘制
            -  每个元素在页面的确切位置和大小，将渲染树与布局信息进行合并，得到绘制树
        - 浏览器将渲染树绘制到屏幕上，显示给用户。

    - 强调一下优化策略
        - 减少http请求数 图片的懒加载
        - 压缩资源文件，nginx gzip压缩浏览器内置解压方法  webp   base64 格式
        - 缓存 强制缓存，协商缓存
        - CDN 将数据储存在离用户更近的边缘服务器上来提高网站访问速度和性能的技术。 减少服务器端压力，缓存能力增强
        - 骨架屏，优化加载速度

- GET和POST的区别   HTTP请求的两种方法
    - GET请求 用于请求指定资源，获取数据
    - POST请求 用于向指定资源提交数据，处理数据。
    1. 传递方式       GET请求通过URL 传递参数；POST请求通过HTTP 请求体传递
    2. 安全性         GET请求在URL中直接可见，不安全；POST请求是加密的，相对安全
    3. 数据量的限制    GET：请求数据量受到URL长度限制，浏览器对URL长度有限制，一般不超过2048个字符；POST：请求数据量没有限制，但是服务器可能对请求体的长度做出限制。
    4. 缓存处理方式    GET：请求结果可以被缓存，适用于不需要实时更新的数据请求；POST：请求结果不能被缓存，适用于实时更新的数据请求。
    5. 应用场景        GET：适用于查询操作，如搜索、翻页等；POST：适用于数据修改操作，如登录、注册、评论等

- 浏览器缓存
    - 主要针对前端静态资源，更快速加载页面、减少网络带宽、减少http请求数，提高网站的性能
    - 强缓存  发生在客户端
        - 设置请求头+响应头
        - HTTP1.0  Expires 通过指定过期时间来表示资源的有效期
        - HTTP1.1  Cache-Control:max-age-xxx指令 表示资源有效期
    - 协商缓存  在后端发生 判断是否需要从服务器请求新的资源，如果资源未发生变化，则直接从缓存中读取数据，否则才会向服务器获取新的数据。
        - 1.0  修改时间Last-modified(服务器端) 当下次浏览器再次请求该资源时，会在请求头中添加   if-modified-since(客户端)
        - 1.1  实体标签Etag     当下次浏览器再次请求该资源时，会在请求头中添加 If-None-Match
        - 服务器在接收到这些参数后会进行比较，判断资源是否被修改过，如果没有被修改过，则返回状态码 304 Not Modified，并且浏览器会从缓存中读取资源，否则返回新的资源文件。
            - Etag 精确度更高，文件hash 计算    缺点是计算成本高

- 数组的api，以及项目中的使用场景
    - push 尾部添加一个或多个元素  
    - pop  删除最后一个元素，并返回改元素
    - shift  头部删除元素
    - unshift  头部添加一个或多个元素
    - concat  合并多个数组，成为一个新数组
    - splice 可以删除也可以添加 （起始位置，需要删除的元素的数量，需要插入的元素）
    - slice  （起始位置，结束位置不包括改位置）
    - forEach
    - reverse
    - map filter reduce
 | 使用场景 + 抖包袱
      - 数组去重  reduce
      - forEach 和 map 的区别，使用场景
          - forEach 传统的遍历，没有返回值
          - map 遍历每一项，返回一个新数组
      - 对象的每一项加一个属性  用forEach 还是map
          - map复杂，forEach 引用式简单
      - 闭包 以及项目中的使用  闭包常用于实现封装、私有变量和模块化等技术。
          - 函数能够访问函数外部的自由变量
          - 函数嵌套函数，内部的函数要返回
          - 防抖  节流  柯里化  
          - 缓存 函数计算的结果
          - 项目中 创建私有变量和方法 从而隐藏实现细节并提高代码的安全性和可维护性。 

- webpack vite 区别
    - vite 浏览器原生的es  module机制  边运行边编译，整理依赖的最小单元  go支撑 热更新更好
    - webpack需要把所有代码都打包，生成dist文件  比较慢  先编译再运行  node支撑

- js的模块化 
    - common.js(AMD, CMD, UMD)  esmodule