//引入fs内置模块 files
const fs = require('fs')
//写入文件
fs.writeFile('./base/wirte.txt', 'hello 通过fs写入文件创建的 <span>haha</span>', (err) => {
    //err 为null 成功
    //err 不为 null  失败
    if (err) {
        console.log(err)
        return
    }
    console.log('success')
})
// 读文件
// fs.readFile('./wirte.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data) //返回的是Butter对象,二进制内容
//     //要通过Butter对象.toString()转化为字符显示
//     console.log(data.toString())
// })
// 读文件  前期读的时候就声明获取
fs.readFile('./base/wirte.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})