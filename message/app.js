//引入http模块
const http = require('http')
// 引入处理文件模块fs 
const fs = require('fs')
// 2.创建web服务器
const server = http.createServer()
//3.监听请求
server.on('request', (req, res) => {
    //获取当前请求地址
    let currentUrl = req.url
    
    if (currentUrl === '/index') {
        //请求‘/MessageTxt’加载留言板页面
        fs.readFile('./view/index.html', 'utf8', (err, data) => {
            if (err) res.end('404 Not Found')
            res.write(data)
            res.end()
        })
    } else if (currentUrl === '/add') {
        //请求‘/AddMessage’加载添加留言页面
        fs.readFile('./view/AddMessage.html', 'utf8', (err, data) => {
            if (err) res.end('404 Not Found')
            res.write(data)
            res.end()
        })
    } else if (currentUrl.indexOf('/public') > -1) {
        //检测是否存在静态资源并响应
        fs.readFile(`.${currentUrl}`,'utf8',(err,data)=>{
            if (err) res.end('404 Not Found')
            console.log(data)
            res.write(data)
            res.end()
        })
    } else {
        //否则404
        fs.readFile('./view/404.html', 'utf8', (err, data) => {
            if (err) res.end('404 Not Found')
            res.write(data)
            res.end()
        })
    }

})
//4.启动服务
server.listen(8080, () => {
    console.log('启动成功，访问：http://localhost:8080')
})