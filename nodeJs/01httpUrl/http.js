const http = require('http'); // 引入http模块 
const url = require('url'); //引入url模块
/**
 * request  获取客户端传来的信息
 * response 返回浏览器响应的信息
 */
http.createServer(function (request, response) {

  // 设置请求头 状态码200  文件类型 html 
  response.writeHead(200,{"Content-type":"text/html;charset='utf-8'"}); //解决乱码
  response.write("<head> <meta charset='UTF-8'></head>");  //解决乱码    

  // 获取url地址栏参数
  var urlInfo = url.parse(request.url,true).query;
  if(request.url != '/favicon.ico'){
    response.write(`姓名：${urlInfo.name}，年龄：${urlInfo.age}。<br/>`);
  }

  response.write('你好，node.js<br/>')
  response.end('Hello World');
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/?name=zhangsan&age=24');