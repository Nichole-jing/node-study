
//创建http对象(引入node内置的http模块)
const  http  = require('http');
//创建http/web服务器，调用http对象的screateServe
const server = http.createServer()
//监听用户请求
let msg = '';
server.on('request',(req,res)=>{
    console.log('收到客户端请求了,请求地址'+req.url )
    //判断请求的地址 加载不同的页面
    if(req.url =='/'){ //如果请求的地址是根
        msg = 'this is index'
    }else if(req.url =='/login'){
        msg = 'this is login'
    }else{
        msg = '404'
    }

    //有请求就要有响应，否则页无法打开
    //write方法：声明客户端发送的数据
    //end方法：结束响应
    //setHeader：为隐式响应头设置单个响应头的值，解决响应数据乱码的问题
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //res.write('<a href="http://www.baidu.com">hell0，node!我这个汉子乱码了吗？</a>')
    res.write(msg)
    res.end()
})
//启动服务器  帕斯奇端口是8180所以要避开这个端口
// 监听页面发请求的端口号
server.listen(8080,()=>{
    console.log('服务已经启动，访问：http://localhost:8080访问测试')
})
//解决乱码问题