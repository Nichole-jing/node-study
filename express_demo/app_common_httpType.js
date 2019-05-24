// 引入
const express = require('express')
// 创建架构核心app对象
const app = express()
// 路由
app.get('/',(req,res)=>{
    const formHtml = `
        <form action="/test" method="get">
            <input  type="text"  name="user" />
            <input  type="text"  name="age" />
            <input  type="submit"   />
        </form>
    `
    res.send(formHtml)
})
app.get('/test',(req,res)=>{
    res.send('this is get submit')
})
app.post('/test',(req,res)=>{
    res.send('this is get submit')
})
//启动服务
app.listen(8080,()=>{
    console.log('Running...')
})