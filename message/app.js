//引入http模块
const http = require('http')
// 引入处理文件模块fs 
const fs = require('fs')
// 引入处理地址模块url
const url = require('url') //因为要获取get请求的地址上携带的参数
// 引入查询字符串模块querystring
const querystring = require('querystring');
// 引入时间模块
const moment = require('moment')

// 2.创建web服务器
const server = http.createServer()
//后端服务器上的假数据
const aryData = [
    { name: '张三', content: '你好呀李四', time: '2019-05-20 12:10:23' },
    { name: '王二麻', content: '范围不不请我打个', time: '2019-05-20 12:10:33' },
    { name: '历程', content: '我吃不完吧', time: '2019-05-20 12:10:37' },
]
//3.监听请求
server.on('request', (req, res) => {
    //获取当前请求地址
    let currentUrl = req.url

    if (currentUrl === '/index') {
        //请求‘/MessageTxt’加载留言板页面
        fs.readFile('./view/index.html', 'utf8', (err, data) => {
            if (err) res.end('404 Not Found')
            //将后端数据响应给前端，但是这里因为是后端给前端代码，所以要替换展示的标签内容
            let strHtml = ''
            aryData.forEach(item => {
                strHtml += `<li class="list-group-item">${item.name}说：${item.content}<span class="pull-right">${item.time}</span></li>`
            })
            data = data.replace('哈哈', strHtml)
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
        //检测是否存在静态资源并响应，因为前端也会发静态资源的请求
        fs.readFile(`.${currentUrl}`, 'utf8', (err, data) => {
            if (err) res.end('404 Not Found')
            res.write(data)
            res.end()
        })
    } else if (currentUrl.indexOf('/doadd') > -1) {
        let urlQuery  = {}
        //前端表单提交发送的服务请求
        //判断请求方式
        if (req.method === 'GET') {
            //1.接收参数
            urlQuery = url.parse(currentUrl, true).query
            //2.入库
            aryData.push({ ...urlQuery, time: moment().format('YYYY-MM-DD HH:mm:ss') })
            //3.跳转 设置头部的方式无法做到重定向，但是通过writehead的方式可以做到
            // res.setStatus = 302
            // res.setHeader('Location', '/index') //不生效
             res.writeHead(302, {'Location': '/index'});
             //writeHead的方式打印出来的是头部信息，set的则为null
            console.log(res._header); 
            res.end()

        } else if (req.method === 'POST') {
            //如果是 post 请求 要监听数据的传输的
            // data事件 -- 数据传输中，end事件 -- 数据传输完毕
            let postDate = ''
            req.on('data',(chunk)=>{
                postDate += chunk
            })
            req.on('end',(chunk)=>{
                //1.接收参数 通过querystring模块将字符串数据转为对象
                urlQuery = querystring.parse(postDate)
                console.log(urlQuery)
                //2.入库
                aryData.push({ ...urlQuery, time: moment().format('YYYY-MM-DD HH:mm:ss') })
                //3.跳转 设置头部的方式无法做到重定向，但是通过writehead的方式可以做到
                // res.setStatus = 302
                // res.setHeader('Location', '/index') //不生效
                 res.writeHead(302, {'Location': '/index'});
                 //writeHead的方式打印出来的是头部信息，set的则为null
                // console.log(res._header); 
                res.end()
            })
        }

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