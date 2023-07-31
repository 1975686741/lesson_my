# 自我介绍
-  我叫ＸＸＸ，　今年毕业于东华理工ＸＸ专业。 在校期间学习ｖｕｅ／ｎｏｄｅ课程时，对前端产生了浓厚兴趣。在最近的一年多时间里看了《你不知道的ＪａｖａＳｃｒｉｐｔ》，认真学习了ｖｕｅ３框架，读了一些ｖｕｅ源码，后端可以使用ｎｏｄｅ完成接口开发。目前也在学习ｒｅａｃｔ ｇｏ等技术，开发中在用ｃｈａｔｇｐｔ等ＡＩ技术提升开发效率。未来３年，想在贵公司往前端全栈的方向发展，不断学习，拥抱团队，相信自己可以胜任研发岗位工作。


# Promise

- Promise是ES6新增的引用类型，JavaScript 中用于处理异步操作的一种编程模式，它用于处理那些可能在未来完成的操作，例如从服务器获取数据、读取文件、执行数据库查询等。Promise 提供了一种更优雅、更可靠的方式来处理异步操作，避免了回调地狱（callback hell）的问题，使异步代码更加清晰、易于理解和维护。
- Promise有三种状态：
    - Pending（进行中）：初始状态，表示异步操作还没有完成；
    - Fulfilled（已完成）：表示异步操作成功完成，并返回了一个结果值；
    - Rejected（已拒绝）：表示异步操作失败或被拒绝，并返回了一个错误原因。
- 更可靠的错误处理：Promise 提供了 .catch() 方法来捕获异步操作中产生的错误，并进行处理。
- 更好的链式调用：Promise 可以通过 .then() 方法进行链式调用，使多个异步操作按照特定的顺序依次执行，避免了回调地狱的问题。
  
- Promise 的实现原理，你可以从以下几个方面进行回答：
Promise 的构造函数接受一个函数作为参数，该函数包含异步操作的逻辑，并且接受两个参数：resolve 和 reject，分别用于异步操作成功和失败时的回调函数。
Promise 的 then 方法可以接受两个回调函数作为参数，第一个回调函数处理异步操作成功的结果，第二个回调函数处理异步操作失败的结果。
Promise 内部通过一个状态机来控制异步操作的状态，状态转换规则如下：
Promise 初始状态为 Pending；
如果异步操作成功，调用 resolve 函数并将 Promise 状态改为 Fulfilled；
如果异步操作失败，调用 reject 函数并将 Promise 状态改为 Rejected；
Promise 一旦进入 Fulfilled 或 Rejected 状态，就无法再次改变。

Promise.all/race/any/allSettled(状态变为 fulfilled 或 rejected）后进行解析，并返回一个包含每个 Promise 结果的对象数组。)/finally(结束时不管成功失败都执行回调)  返回一个promise实例
    - finally 有什么用 
        - 大型语言 try{} catch(){}  finally
        1. 不管成功失败，都要有执行结果，就用finally  不会改变promise的状态
        2. 有些应用不只是耗时
              1. I/O操作要关闭句柄...
Promise then  第二个参数 和catch的区别
    - catch
          .then(() => {}, (reson) => {

          })  链式调用更简洁  

- 如何判断一个对象为Promise对象
*  instanceOf
* 使用Promise.resolve()方法判断 
传入的参数转换为Promise对象，如果参数本身就是Promise对象，则直接返回该对象。
* 判断对象是否具有then方法

- 最后，你可以结合实际项目经验，讲解你是如何使用 Promise 解决具体的异步编程问题的，例如：
在前端项目中使用 Promise 处理 Ajax 请求；
在 Node.js 项目中使用 Promise 处理文件读写、数据库操作等异步操作；
使用 Promise 实现异步代码的流程控制和数据处理等功能。   

# 介绍一下HTTP状态码  相应的场景
    - 1XX  消息状态码
    - 2XX  成功
        - 200：OK 请求成功。一般用于 GET 与 POST 请求。
        - 201：Created 已创建。成功请求并创建了新的资源。
        - 202：Accepted 已接受。已经接受请求，但未处理完成。
    - 3XX  跳转/重定向状态码
        - 300：Multiple Choices 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择。
        - 301：Moved Permanently 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替。
        - 302：Found 临时移动，与 301 类似。但资源只是临时被移动。客户端应继续使用原有URI。缺点：无论什么method都会变成GET
        - 303：See Other    查看其它地址。与 301 类似。使用 GET 和 POST 请求查看。
        - 304：Not Modified    未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。
        - 307：临时重定向，重新发送请求到另一个URL。与其他重定向状态码不同，307保留了客户端请求方法（例如GET或POST）和请求体的信息。 网站维护，到备用URL；负载均衡；http升级到https
    - 4XX  用户端/客户端出错
        - 400 Bad Request  客户端请求的语法错误/用户没有按要求完成，服务器无法理解。 | 用户名错误
        - 401 Unauthorized 请求要求用户的身份认证  | 未登录
        - 402：Payment Required 保留，将来使用。
        - 403：Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求。| 登录了但没权限
        - 404：Not Found 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面。
        - 405：Method Not Allowed 客户端请求中的方法被禁止。
        - 409：Confilt  冲突，服务器处理请求时发生了冲突 | 注册时，用户名别人注册了
    - 5XX  服务器端出错
        - 500：Internal Server Error 服务器内部错误，无法完成请求。

# http 和 https 的区别及优缺点？
	1. http 是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的超文本传输协议。
	2. https 是以安全为目标的HTTP通道，即HTTP下 加入SLL层进行加密。 作用是：建立一个信息安全通道，来确保数据的传输，确保网站的真实性。

http 是超文本传输协议，信息是明文传输，HTTPS 协议要比 http 协议安全，https 是具有安全性的 ssl 加密传输协议，可防止数据在传输过程中被窃取、改变，确保数据的完整性(当然这种安全性并非绝对的，对于更深入的 Web 安全问题，此处暂且不表)。
http 协议的默认端口为 80，https 的默认端口为 443。
http 的连接很简单，是无状态的。https 握手阶段比较费时，会使页面加载时间延长 50%，增加 10%~20%的耗电。
https 缓存不如 http 高效，会增加数据开销。
Https 协议需要 ca 证书，费用较高，功能越强大的证书费用越高。
SSL 证书需要绑定 IP，不能再同一个 IP 上绑定多个域名，IPV4 资源支持不了这种消耗。

# TCP和UDP的区别
	* TCP是面向连接的；而UDP是面向无连接的
	* TCP仅支持单播传输，客户端到服务器端单向传输；而UDP提供了单播，多播、广播的功能
	* TCP的三次握手保证了连接的可靠性；UDP是无连接的、不可靠的一种数据传输协议，通信对不需要建立连接，对接收到的数据也不发送确认信号，发送端不知道数据是否会正确接收
	* UDP的头部开销比TCP的更小，数据传输速率更高，实时性更好

# vue2和vue3的区别
    - 生态系统方面的区别：
Vue 2 拥有成熟的生态系统，有大量的插件、组件库和工具可供使用。
Vue 3 的生态系统正在迅速发展中，一些 Vue 2 的插件和组件库正在逐步迁移到 Vue 3 上,但是vue3有很多方面的优化
    - setup 语法糖 + Composition API: 与 Vue 2 的选项式 API 相比，组合式 API 允许将相关的功能更紧密地组织在一起，把代码更好地聚合在一起 & 逻辑重用,提高了代码的可读性和可维护性。
    - 更好的 TypeScript 支持：Vue 3 的源代码使用 TypeScript 编写，这意味着 Vue 3 与 TypeScript 的集成更加紧密，提供了更好的类型推断和类型安全。
    - 多个根元素：Vue 3 允许在组件模板中使用多个根元素，不再需要一个包裹元素。这可以减少不必要的 DOM 结构，提高代码的可读性。
    - 响应式系统：Vue 2 的响应式系统使用了 Object.defineProperty 来劫持数据的访问和修改，而 Vue 3 使用了 ES6 的 Proxy 对象实现响应式系统，Proxy 对象可以捕获到更多的操作，如属性的删除和新增，从而实现更全面的响应式追踪。提供了更高效和灵活的数据劫持机制。
    -  源码架构：Vue 2 的源码采用的是 monolithic（单体）架构，整个源码都集中在一个代码库中。而 Vue 3 的源码采用的是 monorepo（多库）架构，将不同功能模块拆分成独立的代码库，例如 runtime-core、reactivity、compiler 等。
    -  Tree-shaking：Vue 3 的核心库被设计为可 Tree-shaking，这意味着只有使用到的功能会被打包，未使用的功能会被移除，最终产出的代码更小。
    -  静态树和静态属性提升：Vue 3 在编译阶段进行了静态树和静态属性提升的优化。这意味着 Vue 3 可以在编译时确定哪些部分是静态的，从而避免了不必要的渲染和更新，提高了性能。
    -  编译器：Vue 2 的编译器将模板转换为渲染函数，而 Vue 3 的编译器进行了重写，采用了基于插槽的中间表示（Slot-based IR），可以更好地处理模板中的动态内容和编译优化。
    -  编译模式：Vue 3 默认采用了运行时编译（Runtime Compilation）模式，而 Vue 2 默认使用的是模板编译（Template Compilation）模式。这使得 Vue 3 的构建体积更小，性能更高，同时提供了更好的开发体验。
    -  VNode 类型：Vue 2 和 Vue 3 的虚拟节点（VNode）类型略有不同。Vue 2 中的 VNode 类型是树状结构的，而 Vue 3 引入了 Fragment 和 Portal，支持更灵活的渲染方式。
    -  虚拟DOM：Vue 3 的虚拟 DOM 引入了 PatchFlag 的概念，更准确地标记节点的特性和变化，以优化 diff 算法的性能。
    -  diff算法：包括更高效的算法实现、减少不必要的遍历和计算、更精简的内部逻辑等，提升了整体的运行效率。Vue 2 和 Vue 3 在处理列表渲染时都需要使用 key 属性来标识节点的唯一性，以便进行更精确的 diff。然而，Vue 3 在对列表进行 diff 过程中采用了更高效的算法，通过使用动态规划的方式来计算最长递增子序列（LIS）来匹配和重排节点，减少了不必要的移动和操作。

# 项目的亮点、难点   必考 要准备好  !important
内联样式（1000）
ID选择器（0100）
类选择器/属性选择器/伪类选择器（0010）
元素选择器/伪元素选择器（0001）
关系选择器/通配符选择器（0000）
    - 技术栈 普通   思想和话术在并行
        1. 全家桶 vue-router启用了组件的懒加载，路由守卫，实现了jwt的登录全流程
        2. 使用了pinia或vuex 数据流管理 将应用开发分成数据管理和界面开发两部分
        3. 组件化思维，按页面组件、通用组件、父子组件 来模块化开发 按需引入vant组件库 减少了代码包的体积
        4. 全面使用composition api + hooks 函数式编程，自定义了useLocation、useRequest
        5. 结合路由守卫和transition组件 实现了页面切换动画
        6. 使用lodash 在搜索界面搜索节流，之后升级为useDbounce  hooks实现
        7. 基于弹性布局、每列的高度计算，将数据绑定算好，完成瀑布流效果的开发
        8. betterscorll 实现丝滑的滚动
        9. axios拦截器，请求拦截添加token到header中的authorization字段 响应拦截解出data和做错误处理
        10. mockjs 请求模拟  使用了较复杂的Mock.Random()  随机生成图片标题...
        11. 使用了flexible 移动端rem适配  图片懒加载  后端数据过滤器 filter
   
    - 难点
        - 瀑布流
            - 数据绑定
            - 高度计算
                - mockjs 高度和图片
        - 前端token校验，使用jwt对登录注册功能进行优化，jsonwebtoken库
        - stylus  mixin混合的使用
        - pinia  模块化状态设计 

- 很多人名， 第一个人名后面不加 ;  其余的后面都加
    - css选择器

# v-if  v-show 区别
v-if和v-show是Vue.js框架中常用的两个指令，用于控制元素的显示和隐藏。它们的区别如下：

v-if指令
v-if指令在渲染时是否出现在DOM中是根据表达式的真假值来决定的。如果表达式的值为真，则该指令所在的元素会渲染到DOM中，否则该元素将不被渲染。

使用v-if指令的优点是，减少了不必要的DOM操作。当表达式的值为假时，该元素不会被渲染到DOM中，可以减少页面的加载时间和内存占用。

缺点是，在页面中频繁地切换v-if指令所在元素的显示状态时，可能会导致Vue.js重复创建和销毁组件实例，造成不必要的性能损失。

v-show指令
v-show指令也用于控制元素的显示和隐藏，但是它不同于v-if。无论表达式的值是真还是假，该指令所在的元素都会被渲染到DOM中，只是通过设置元素的display属性来控制元素的隐藏和显示。

使用v-show指令的优点是，不会重复创建和销毁组件实例，性能相对于v-if指令更好，而且在频繁切换元素的显示状态时，也不会影响到DOM的渲染。

缺点是，由于元素始终存在于DOM中，无论表达式的真假，因此可能会占用一定的内存空间。

# 鉴权
    - 理清思路  条理清晰
    1. 在路由配置数组中，使用meta对象 配置是否需要登录，还有角色 
          1. 登录 isLogin 布尔值  没有登录，去到这个页面，redirect 到login
          2. 角色 role  给些数值，未来根据用户角色看拥有的权限数组是否包含该值，看是否包含该值 403
          3. 配置路由守卫 
                1. 每次路由的切换 都会执行deforeEach钩子函数，三个参数(to,from,next),不需要鉴权 next放行，通过 to，也就是路由对象，表示要读取它的meta里的isLogin或者role属性 做相应判断，需要登录没登录，就304 redirect跳转 到login页面；当前role 没有to 的访问权限，送去首页或显示403 forbidden
          4. axios 请求拦截 判断当前localStorage中是否有token，有 就在头部之中带上Authorization字段，值为token
          5. 后端鉴权 
                1. cookie / session  通过cookie拿到session，session中间件帮我们做，在ctx.session之中 访问的上下文对象之中  
                2. jwt 解析请求中的Authoration头，jwt decode 更安全，只有后端才有解密的密码 拿到currentUser对象，在任何需要鉴权的路由中间件、控制器 前加上鉴权中间件  
                router.post('/posts', auth, postScontroller.add)  auth中间件  
                如果没有，返回403 ； 如果有，返回json数组

- 扁平化 flatten  
   将多层级数组转化为一维数组
  
    1. 递归思想
    2. API
    3. 业务需求
       1. 多维数组 -> 一维数组

- localStorage 本地存储  是html5 的重要功能
    - cookie 身份状态 随着http每次发送
        - 用来设计解决   HTTP的 无状态协议问题(stateless),弥补这个缺憾
        - 每次请求响应是独立的  
            1. 无缝衔接 渣男！ 很快就换，服务器响应简单
            2. 没有事务记忆能力  
                  基于请求响应  非常公平、快速
        - 登录 购物车 评论 点赞  ->  就可以用上cookie（字符串 ...=... ; ...=...）了
        - HTTP头部的信息
        - 更小 < 4kb
        - url的长度是有限的
        - 域名相关  同一个域名下的所有请求都会带上相同的字符串cookie,服务器端解析这个cookie
        - 因此对请求的性能是有影响的
    - localStorage 不需要每次http 请求都发送  
         本地存储  domain需求，不同域名的localStorage不同，不会搞混  
         大小也有限制 5M  存储一些用户的设置、草稿箱、首页列表  

         JSON.stringify()  序列化  
         JSON.parse()   反序列化

- HTTP无状态协议 
    - 协议对于事务处理没有记忆能力。缺少状态意味着，如果后续处理需要前面的信息，则它必须重传，这样会导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时，它的应答就较快。

- 扁平化
    - JS开发中经常需要把一个多维数组一维化,flatten

    1. 遍历 + Array.isArray 递归, 传统解决
    2. reduce 可以优化命令式,解决更优美  
       [] result  t:已经扁平化的部分数组, v:Array.isArray 是否递归
    3. 将数组序列化后,得到字符串,正则替换掉[]  
       接着使用splice 切割   或者  最外层 + []  
       反序列化一下,得到一维数组
    4. es10 Array.flat(Infinity)
    5. 为了兼容性,不重复造轮子, 使用 lodash 库

- reduce map some filter find  高阶函数  
       如果函数的参数是函数,或者返回值是函数  
   - 闭包   高阶函数   返回值是函数
   - map... 高阶函数   参数是函数
   - map  
       es6 数组的API,  基于一个数组每一项执行一个函数,返回值组成一个新的数组,  主要用于数组的变形  

       1. 数组中的每一项都调用一个提供的函数,返回的结果组成新的数组
       2. 全新的函数式编程风格, 更好理解,提升了代码的可读性
       3. 原来的数组不会受到影响
       4. 参数有三个 (item, index, array), 如果要加点佐料的话,在函数运行的时候还可以加点 this     
         `
                  let newNums = nums.map(function(item, index, array) {
             // 没有return 会undefined
              return item + index + array[index] + this.val
               }, obj)
         `    
         这是我查MDN文档学习到的

- call  手写  
    核心是把原来的方法  
    作为带指定的this对象的方法来执行

    1. 方法作为指定this对象的方法来调用，动态添加方法
    2. Symbol 唯一值，动态添加方法不会覆盖
    3. delete 删除Symbol值，不修改对象
    4. 该拿的 参数类数组，数组化，再展开交给函数
    5. 函数运行拿到返回值，返回

- 拷贝
    - 拷贝 -> 浅拷贝 -> 深拷贝  

    JS 对象赋值不是拷贝


# Vue-Router 哪几种方案，原理是什么？   
    - URL改变，但页面无需刷新，SPA单页应用，优化了体验
      - 传统的基于后端路由，访问请求，会白屏，重新请求
      - 动态修改页面
    1. Hash模式
      - 使用URL的哈希部分（#后面的部分）来模拟路由。当URL中的哈希值发生变化时（HashChange事件），Vue-Router会根据哈希值的变化来匹配对应的路由，并进行页面更新。
      - 优点：兼容性好，可以支持不同浏览器和服务器环境。
      - 缺点：URL中含有冗余的#字符，不够美观。
    2. History模式
      - 使用HTML5的History API，在不刷新整个页面的情况下改变URL，实现路由切换效果。通过使用pushState或replaceState方法来修改URL，同时使用popstate事件来监听URL的变化，订阅发布者模式。
      - 优点：URL更加美观，没有冗余的#字符。
      - 缺点：需要服务器端配置支持，否则在刷新页面时会导致404错误。兼容性较差。
    3. Abstract模式
      - 在非浏览器环境中使用，例如在服务器端渲染（SSR）或原生移动应用中。不会直接操作URL，而是将路由状态保存在内存中，并通过调用相应的方法来实现路由切换和页面渲染。
      - 优点：适用于非浏览器环境，不依赖URL。
      - 缺点：不支持直接访问特定路由。
    
# vue修饰符
    - 表单修饰符
        - v-model.lazy  v-model.trim v-model.number...
    - 事件修饰符
        - v-on:click.stop  v-on:click.prevent...
        - .passive v-on:scroll.passive 节流
        - .capture  父元素先于子元素触发
        - .self 只有事件是由元素自己触发时才触发对应的事件处理函数，而不是来自子元素的冒泡事件
    - 键盘修饰符
  
# 编写一个focus指令 directive
    ``
            // 指令是会绑定DOM的
        Vue.directive('focus', {
            // 当被绑定的元素插入到DOM中时。。
            inserted: function(el) {
                el.focus();
            }
        })
        <input v-focus />
    ``

# 点击回到顶部
    - 锚链接
        <body>
            <div id="top"></div>
        <a href="#top">回到顶部</a>
    - js
        window.scrollTo({
            top:0,
            behavior: 'smooth'  // 平滑滚动效果
        })

# html input 如何实现上传多个文件
    <input type="file" multiple>

# display 有哪些值？
    - 盒子的默认行为
        - inline  block  inline-block(会有小间隙，设置父元素font-size=0)
    - 常用布局方案 flex table grid 
    - 离开文档流  none

# 什么是事件委托
    事件委托是一种提高程序性能，降低内存空间的技术手段，它利用了事件冒泡的特性，只需要在某个祖先元素上注册一个事件，就能管理其所有后代元素上同一类型的事件，而不需要给子元素一个一个的注册事件。

# 盒模型
    - 标准盒模型： 一个块的总宽度 = width+margin(左右)+padding(左右)+border(左右)
    - 怪异盒模型： 一个块的总宽度 = width（既 width 已经包含了 padding 和 border 值）+ margin（左右）

# call，apply，bind
        - call 方法接受一个参数列表，每个参数都需要显式列出并依次传递给函数。
        - apply 方法接受两个参数，第一个参数是要绑定给函数的执行上下文，第二个参数是一个数组或类数组对象，其中包含要作为参数传递给函数的值。
        - bind 方法不立即执行函数，而是返回一个新函数。返回的函数可以稍后调用，并将指定的执行上下文和参数传递给原始函数。

# 浅拷贝和深拷贝

# map和forEach
    - 返回值：
map 方法会返回一个新数组，该数组中的每个元素是执行回调函数后的返回值。
forEach 方法没有返回值，只是对数组的每个元素依次执行指定的回调函数。
    - 使用结果：
map 方法的返回值可以被存储和进一步处理。通常情况下，我们会使用 map 来对数组中的每个元素进行处理，并将处理结果组成一个新的数组。
forEach 方法主要用于迭代数组，执行一些副作用操作（比如打印、修改其他变量等），而不关心返回值。
    - 修改原数组：
map 方法不会改变原始数组，它会创建一个新的数组来存储处理后的结果。
forEach 方法也不会改变原数组，但可以通过回调函数中对元素的操作间接修改原数组。
    - 中断循环：
map 方法会遍历完整个数组，并将每个元素都传递给回调函数进行处理，无法中途跳出循环。
forEach 方法也会遍历完整个数组，无法中途跳出循环。如果需要提前终止循环，可以使用 some 或 every 方法。

    需要处理数组并获得一个新的数组作为结果，可以使用 map 方法；而如果只是简单地对数组进行遍历，进行一些副作用操作，可以使用 forEach 方法。
# 闭包

# 原型和原型链




#  编译原理 component -> template -> compiler -> h(三个参数, babel 抽象语法树构建) -》 VNode + Renderer -》DOM树
    - `` 
            let a = 1;
            let b = 2;
            let c = a + b;
            词法分析 token 以树状结构组织   所有代码形成 AST抽象语法树
        ``

# h（）函数   模式
    - 返回的VNode设计 
    - 参数  三个  tag data children

# VUE源码学到了什么？
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



# 组件生成什么？
    - render template{{}}  v-if  :  产出vdom虚拟dom =》createElement
    - reactive  ref  setup
    - 生命周期 
    - VDOM
    - DIFF

# Component 类 函数 =》render =》真实的dom
    - 组件化思想 =》 reactive diff 数据驱动思想 =》最后 createElement

# 组件前世的本质 一个组件就是一个函数，给什么样的数据，就渲染对应的 html 内容。
    - Component(VDOM)
    - +
    - render 方法
# 组件的产出就是 Virtual DOM
    - 分层  平台无关性 VDOM -> PATCH -> HTML/WXML/XML都可以  实现SSR 在服务器端渲染
    - 性能优化 
        - 查找  比对   在内存中高效地收集差异

# 函数式组件(Functional component) 和 有状态组件(Stateful component)。
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
  
# flags设计
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

# 二次更新渲染细节
  - 如何更新 首先如何比对节点
    - 比较tag
      - tag类型都不一样  直接replace
    - 比较data
    - 比较children
# vue源码中学到了什么？
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

# ORM  对象关系映射
    可以简化数据库操作，避免手动编写 SQL 语句，提高开发效率。ORM 也能够提高代码的可读性和可维护性，因为它能够将与数据库相关的代码与业务逻辑分离开来，使代码更加清晰。


# cookie 或者本地存储
    - httponly  防止xss跨站脚本攻击
        - 默认是js也可以读取 =》功能会受到XSS攻击（网页中植入一段代码，把cookie读取发送到黑客，获取了身份）
        - true 只在http请求过程中传递
        - session_id这种cookie 肯定要设置，username等js需要访问的 安全性没问题的业务cookie不设置
    - secure
        - 只有是https的可靠链接才会发送
- 本地存储
    - cookie过期时间，每次请求都会传输，要考虑性能和安全问题
      - localStorage一直都在，只存在客户端，默认不参与服务端的通信
      - sessionStorage 关闭就没有
    - cookie最小 4KB
        - localStorage 5M
        - IndexDB  数据库 更大
    - sessionStorage 表单业务  优化体验

- 同源策略
    - 沙箱，一种安全机制，用于隔离不受信任的代码
    - 跨域