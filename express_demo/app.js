//1.引入模块
const express = require('express')
//2.创建web服务器
const app = express()
//声明所使用的模板引擎，ps：使用render()方法必须
//首先要安装art-template，和 express-art-template
// app.engine('html',require('express-art-template))

//3.路由
app.get('/',(req,res)=>{
    //end() 结束并响应字符串 会乱码
    // send() 响应字符串 自动识别-->直接数据响应
    // render() 响应字符 自动识别,只能打开指定文件字符串并响应，注：必须配模板引擎使用
    // res.end('你好呀，<a href="http://nn.com">点击</a>')
    res.send('你好呀，<a href="http://nn.com">点击</a>')
})
//4.启动服务(监听端口)
app.listen(8080,()=>{ //express模块创建的
    console.log(`启动成功，访问：http://localhost:8080`)
})