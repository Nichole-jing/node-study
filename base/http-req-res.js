const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // console.log(req)
   // res.write('打印request')
    res.write('打印request')
    res.end()
})
server.listen(8081, () => {
    console.log('服务启动成，访问http://localhost:8081')
})