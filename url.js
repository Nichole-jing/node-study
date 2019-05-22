//网站处理模块、
const url = require('url')
const srtUrl = 'http://192.168.11.210:8087/text/?type=all&infoId=460000201502071121#/detailpage'
//url.parse(urlString,boolean,boolean)
//　parse这个方法可以将一个url的字符串解析并返回一个url的对象
//参数：urlString指传入一个url地址的字符串
//第二个参数（可省）传入一个布尔值，默认为false，为true时，返回的url对象中，query的属性为一个对象。
//第三个参数（可省）传入一个布尔值，默认为false

const urlQueryObj = url.parse(srtUrl,true) // true 表示转为json格式

console.log(urlQueryObj)
console.log(urlQueryObj.query.type)