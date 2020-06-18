// 引入所需模块
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const events = require('events');
const util = require('./js/util.js');

var EventEmitter = new events.EventEmitter();
http.createServer(function (request, response) {
  var reqUrl = url.parse(request.url).pathname;
  if (reqUrl != '/favicon.ico') {
    var pathName = reqUrl;
    if (pathName == '/') {
      pathName = '/login.html';
    }

    var extname = path.extname(pathName);

    // var mime = util.getmime(extname);
    // var mime = util.getmimeAll(fs,extname);

    console.log(util.getmimeAll(fs, extname))
    fs.readFile('.' + pathName, (error, data) => {
      if (error) {
        fs.readFile('./404.html', function (err, data404) {
          if (err) {
            console.log(err);
          }
          util.eventsmimeAll(fs, EventEmitter, extname);
          EventEmitter.on('send_data', function (mime) {
            response.writeHead(404, { "Content-type": "" + mime + ";charset='utf-8'" }); //解决乱码
            response.end(data404);
          })
        })
        return
      } else {
        // response.writeHead(200, { "Content-type": ""+mime+";charset='utf-8'" }); //解决乱码
        // response.write(data);
        // response.end('');
        util.eventsmimeAll(fs, EventEmitter, extname);
        EventEmitter.on('send_data', function (mime) {
          response.writeHead(200, { "Content-type": "" + mime + ";charset='utf-8'" }); //解决乱码
          response.end(data);
        })
      }
    })
  }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');