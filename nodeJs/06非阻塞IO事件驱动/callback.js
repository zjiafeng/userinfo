const fs = require('fs');
console.log('1')
function gettxt(callback) {
    fs.readFile('./index.txt', (err, data) => {
        if (err) {
            console.log(err);
            return err
        }
        callback(data.toString())
    })
}
gettxt((res) => {
    console.log(res)
});
console.log('3')

// 处理异步 ：
function getData(callback) {
    // 模拟请求数据     
    var result = '';
    setTimeout(function () {
        result = '这是请求到的数据';
        callback(result);
    }, 200);
}

getData(function (data) {
    console.log(data);
})

