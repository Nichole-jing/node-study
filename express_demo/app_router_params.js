// 引入
const express = require('express')
// 创建架构核心app对象
const app = express()
// 路由
app.get('/info/:name/:age',(req,res)=>{
    console.log(req.params)
    res.send('匹配成功~~ this is httpType')
})
//使用use的方式时，也带参数的话，路径也要写全 否则匹配不成功
app.use('/test/:name',(req,res)=>{ 
    res.send('this is use use-methods')
})
app.use('/test/',(req,res)=>{ 
    res.send('this is use use-methods')
})

//启动服务
app.listen(8080,()=>{
    console.log('Running...')
})