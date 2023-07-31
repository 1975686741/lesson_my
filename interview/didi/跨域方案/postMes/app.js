const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.createReadStream('./1.html').pipe(res);
    }
})

server.listen(8081)