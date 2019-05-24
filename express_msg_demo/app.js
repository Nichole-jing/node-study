const msgs=[
    { name: '张三', content: '你好呀李四', time: '2019-05-20 12:10:23' },
    { name: '王二麻', content: '范围不不请我打个', time: '2019-05-20 12:10:33' },
    { name: '历程', content: '我吃不完吧', time: '2019-05-20 12:10:37' },
]
//1.引入exoress框架
const express = require('express')
const url = require('url')
const moment = require('moment')
const querystring = require('querystring')
// 2.创建app对象
const app = express()
//3.配置
app.engine('html', require('express-art-template'))
app.use('/public', express.static('public'))
// 4.路由
//# 留言列表
app.get('/', (req, res) => {
    res.render('index.html',{
        msgs
    })
})
//# 留言添加
app.get('/add', (req, res) => {
    res.render('AddMessage.html')
})
//# 留言添加处理 
// get请求
app.use('/doadd', (req, res) => {
    let params =  url.parse(req.url,true).query
    console.log(params)
    msgs.push({...params,time: moment().format('YYYY-MM-DD HH:mm:ss')})
   res.redirect('/')
})

// app.use('/doadd', (req, res) => {
//     let params = {}
//     if(req.method === 'POST'){
//         let addMsg = ''
//         res.on('data',(chunk)=>{
//             console.log(chunk)
//             addMsg += chunk
//         })
//         res.on('end',(chunk)=>{
//             params = querystring.parse(addMsg)
//         })
//     }else{
//         params =  url.parse(req.url,true).query
//     }
   
//     msgs.push({...params,time: moment().format('YYYY-MM-DD HH:mm:ss')})
//     res.redirect('/')
// })

// 5.启动服务
app.listen(8080, () => {
    console.log(`启动成功，访问：http://localhost:8080`)
})