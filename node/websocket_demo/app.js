const WebSocket = require('ws'); // 基于tcp/ip 
// 在某个端口启动的程序 
// ip 定位服务器 ：3000  （某个进程） -》 某个程序
const wss = new WebSocket.Server({
    port: 3000
})
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // console.log(message, '////////');
        let msgData = JSON.parse(message)
        console.log(msgData, '/////')
        wss.clients.forEach(client=>{
            client.send(message)
        })
    })
})



