const Koa = require('koa'); // node 里的框架 commonjs 模块
const router = require('koa-router')();
const app = new Koa(); //  服务器端应用
const path = require('path') // 内置模块
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken')

// 挂载模板引擎
app.use(views(
    // 模板位置和 引擎
    path.join(__dirname, './views'), {
        extension: 'ejs' // 模板引擎的种类
    }
))

app.use(bodyParser())

// 后端的登录界面 传统的web 网站开发 
router.get('/login', async (ctx) => {
    // ctx 本次服务的上下文环境对象 = request + response 
    // 伺服状态， 怎么响应用户请求 
    // response
    const title = 'hello koa2'
    // 页面的渲染  传统的  MVC  View Controller 
    await ctx.render('index', {
        title
    })
    // 前后端分离
    // ctx.body = {
    //     msg:'hello, login'
    // }
})

router.get('/user', async(ctx) => {
    await ctx.render('user')
})

router.get('/profile', async(ctx) => {
    console.log(ctx.request.headers);
    const auth = ctx.request.headers['authorization'];
    console.log(auth);  // token
    const payload = jwt.verify(auth, 'lm-19-ITgood')   // id:1
    ctx.body = {
        id: payload
    }
})

router.post('/login', async (ctx) => {
    const { name, pwd } = ctx.request.body
    // console.log(name, pwd, '结构出来了');
    // 解析请求体  ctx.request,headers
    // 颁发token   sign 签发
    if (name === 'admin' && pwd === '123456') {
        // 数据库查出来的userId = 1
        // json 数据    这样就比cookie的数据丰富
        // 钥匙，只在服务器端生成和校验
        // cookie 前后端都可以，且是明文的，会被第三方截获
        // 只有在后端才能解析   json
        const token = jwt.sign({
            id: 1
        }, 'lm-19-ITgood', {
            expiresIn: 6000
        })
        ctx.body = {
            statusCode: 200,
            token
        }
    } else {
        ctx.body = {
            statusCode: 200,
            msg: '用户名或密码错误'
        }
    }
})

app
    .use(router.routes()) // vue 路由数组
    .use(router.allowedMethods()) // get post delete put patch ... 

app.listen(8080, () => {
    console.log('server is running 8080')
})

