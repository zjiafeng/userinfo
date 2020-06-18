// 引入所需模块
const fs = require('fs');
const url = require('url');
const path = require('path');
const events = require('events');
const EventEmitter = new events.EventEmitter();

/**
 * 获取文件后缀名方法
 */
function eventsmimeAll(fs, events, path) {
    fs.readFile('./static/mime.json', (err, data) => {
        if (err) {
            console.log('没有找到mime.json文件');
            return err
        }
        var mimes = JSON.parse(data.toString());
        var result = mimes[path] || 'text/html';
        events.emit('get_mime', result);
    })
}

exports.statics = function (request, response, staticpath) {
    var pathName = url.parse(request.url).pathname;
    if (pathName != '/favicon.ico') {
        if (pathName == '/') {
            pathName = '/login.html';
        }

        var extname = path.extname(pathName);

        fs.readFile(staticpath + '/' + pathName, (error, data) => {
            
            if (error) {
                fs.readFile(staticpath + '/404.html', function (err, data404) {
                    if (err) {
                        console.log(err);
                    }
                    eventsmimeAll(fs, EventEmitter, extname);
                    EventEmitter.on('get_mime', function (mime) {
                        response.writeHead(404, { "Content-type": "" + mime + ";charset='utf-8'" });
                        response.end(data404);
                    })
                })
                return
            } else {
                eventsmimeAll(fs, EventEmitter, extname);
                EventEmitter.on('get_mime', function (mime) {
                    response.writeHead(200, { "Content-type": "" + mime + ";charset='utf-8'" }); //解决乱码
                    response.end(data);
                })
            }
        })
    }
}


