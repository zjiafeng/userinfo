const http = require('http');
const ejs = require('ejs');
const url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    let pathName = url.parse(request.url).pathname;
    if (pathName === "/login") {
        var data = '登录页面';
        var list = ['星期一', '星期二', '星期三'];
        var p = '<p>这是个p标签</p>'
        ejs.renderFile('./views/login.ejs', { data, list, p }, function (err, data) {
            response.end(data);
        });
    }else{
        ejs.renderFile('./views/register.ejs', { msg:'注册' }, function (err, data) {
            response.end(data);
        });
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');