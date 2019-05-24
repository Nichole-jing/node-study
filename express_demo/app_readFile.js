// express 托管静态资源
// 引入模块
const express = require('express')
const fs = require('fs')
// 创建架构核心app对象
const app = express()
// 路由
//#region
// 响应指定静态资源
// app.get('/public/css/a.css',(req,res)=>{
//    fs.readFile('./public/css/a.css','utf8',(err,data)=>{
//        if(err) res.send(err)
//        res.send(data)
//    })
// })
//响应多个静态资源
// app.use('/public',(req,res)=>{
//     fs.readFile(`./public/${req.url}`,'utf8',(err,data)=>{
//         if(err) res.send(err)
//         res.send(data)
//     })
//  })
//#endregion

//在express中

//启动服务
app.listen(8080, () => {
    console.log('Running...')
})