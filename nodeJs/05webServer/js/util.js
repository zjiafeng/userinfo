exports.getmime = function(path){
    switch(path){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/js';
        default:
            return 'text/html'
    }
}

exports.getmimeAll = function(fs,path){
    // 同步读取数据
    let mimeJson = fs.readFileSync('./mime.json');
    return JSON.parse(mimeJson.toString())[path]
}

exports.eventsmimeAll = function(fs,events,path){
    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            return err
        }
        var mimes = JSON.parse(data.toString());
        var result = mimes[path] || 'text/html';
        events.emit('send_data',result);
    })
}