// 引入
const express = require('express')
// 创建架构核心app对象
const app = express()
// 路由
app.get('/',(req,res)=>{
    const formHtml = `
        <form action="/test/a/s" method="get">
            <input  type="text"  name="user" />
            <input  type="text"  name="age" />
            <input  type="submit"   />
        </form>
    `
    res.send(formHtml)
})
app.use('/test',(req,res)=>{
    res.send('this is use use-methods')
})

//启动服务
app.listen(8080,()=>{
    console.log('Running...')
})