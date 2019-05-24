//path 路径处理模块
// 引入内置模块
const path  = require('path')
let testData = '/Users/jing-chen/Documents/songfanjing/2019/testFiles/node_test/www'
// dirname 去最后一层，返回的是去掉后的东西
// basename 取最后一层，返回的是最后一层的东西
console.log(path.basename(testData))
testData = path.dirname(testData)
console.log(testData)
console.log(path.basename(testData))