const http = require('http')
const fs = require('fs')
const path = require('path')
const { url } = require('inspector')
const server =  http.createServer((req, res) => {
    if (path.normalize(decodeURI(req.url)) !== decodeURI(req.url)) {
        res.statusCode = 403;
        res.end();
        return;
    }
    // console.log(req.url);
    if (req.url == '/') {
    //     // 首页html 
    //     fs.readFile('./index.html', 'utf-8', (err, data) => {
    //         // node 异步无阻塞
    //         // 默认第一个参数 err
    //         if (err) {
    //             res.end('出错了')
    //             return
    //         }
    //         // console.log(data);
    //         res.end(data)
    //     })
    // Async 异步  Sync 同步  会阻塞
    // const data = fs.readFileSync('./index.html', 'utf-8')
    // console.log(data);
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return
    }
    // console.log(req.url);
    let abs = path.join(__dirname, req.url)

    // 文件或目录的信息
    fs.stat(abs, (err, stat) => {
        if (err) {
            res.statusCode = 404
            res.end('not found')
            return
        }
        // linux 文件和文件夹 都是fs 一样的，区别是 头信息会标注 是否是文件
        if (stat.isFile()) {
            // 强缓存 本地时钟 不准确
            // res.setHeader('Expires', new Date(Date.now() + 200000).toGMTString())
            // Cache-Control  20秒之后 需要重新请求
            res.setHeader('Cache-Control', 'max-age=20')
            fs.createReadStream(abs).pipe(res)
        }
    })
    // console.log(abs);
    // res.end('CC')
})

server.listen(3000)