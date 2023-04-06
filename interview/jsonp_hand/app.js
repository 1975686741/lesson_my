// 简单三行 启动web服务
// const express = require('express')  
// const app = express()
// app.listen(2000)

const express = require('express')  // express 简单的node服务器开发框架，koa的爸爸
const app = express()

// 第二种方法使用中间件
// node在所有的请求和相应中间加上一个功能 =》中间件
// 从请求到达开始，以相应用户结束，发送内容
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')  // 允许域的请求（* 所以）
//     next()
// })

// 第四种CORS cors包
// var cors = require('cors') // cors 的封装
// var whitelist = ['http://127.0.0.1:5500', 'http://localhost:2000/other','http://localhost:2000/say']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin ) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.get('/other',cors(corsOptions), (req, res,) => {
//     let obj = {
//         name: '小徐',
//         spec: 'iii'
//     }
//     res.setHeader('Content-Type', 'text/json;charset=utf-8') //告诉浏览器使用UTF-8现实，中文就不会乱码了
//     res.end(JSON.stringify(obj))
//     next()
// })
app.get('/say', (req, res) => {
    console.log(req.query);
    let obj = {
        name: '小胡',
        spec: 'yyds'
    }
    // res.setHeader('Access-Control-Allow-Origin', '*')  // 允许域的请求（* 所以） 第一种方法写在这里
    res.setHeader('Content-Type', 'text/json;charset=utf-8') //告诉浏览器使用UTF-8现实，中文就不会乱码了
    res.end(JSON.stringify(obj))
})
app.get('/other', (req, res,) => {
    let obj = {
        name: '小徐',
        spec: 'iii'
    }
    res.setHeader('Content-Type', 'text/json;charset=utf-8') //告诉浏览器使用UTF-8现实，中文就不会乱码了
    res.end('callback(' + JSON.stringify(obj) + ')')
})

app.listen(2000)