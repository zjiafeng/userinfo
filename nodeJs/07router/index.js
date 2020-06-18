// 引入所需模块
const http = require('http');
const router = require('./static/js/router.js'); 

http.createServer(function (request, response) {
  router.statics(request, response,'static')
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');