// http服务
// 提供 /banners 路由服务
// js  宿主环境 brower document
//              node  linux  命令行 http
// node后端开发太快了 适合中小型项目   js是弱类型（简单）语言 不太‘壮’，单线程（学起来也简单）较脆弱
// require?  模块化 commonjs   模块化关键字
// import from ''   es6
const http = require('http');  // node js在后端的实现  引入node内置http库
// web server
// 一个网站 其实就是一个web server的 单例

// res 响应用户的请求，结束

const server = http.createServer(function(req, res) {
    console.log(req.url, '////');
    // req.url == '/banners'
    if (req.url == '/banners') {
        const data = {
            "data": [
              {
                "id": 1,
                "pic": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd72f733af324aaea471f3bd98c35504~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
              },
              {
                "id": 2,
                "pic": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3444b8d9e61645cfb3d453bb06bb4620~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
              },
              {
                "id": 3,
                "pic": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2328f178147743228f9d7457391154c1~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
              }
            ]
        }
        res.end(JSON.stringify(data))
        // banners
    } else if (req.url.indexOf('/detail') >= 0) {
        // detail 
        const data = {
            "id": 1,
            "title": "百度胡总面试之旅",
            "desc": "五个月， 冲击毕业前大厂就业。 "
        }
        res.setHeader('Content-type', 
        'application/json;charset=utf-8')
        res.end(JSON.stringify(data));
    }
   
}) // web 服务
server.listen(3000)