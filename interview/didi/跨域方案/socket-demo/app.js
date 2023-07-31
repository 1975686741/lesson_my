const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 1235
})

wss.on('connection', function connection(ws) {
    ws('message', (message) => {
        console.log('收到:', message);
        ws.send('hello,布鲁斯!');
    })
    ws.on('close', () => {
        console.log('WebSocked closed');
    })
})