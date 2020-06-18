/**
 * fs.stat              检查是文件还是目录
 * fs.mkdir             创建目录
 * fs.writeFile         创建写入文件
 * fs.appendFile        追加文件
 * fs.readFile          读取文件
 * fs.readdir           读取目录
 * fs.rename            重命名 移动文件
 * fs.unlink            删除文件
 * fs.rmdir             删除目录
 * fs.createReadStream  从文件流中读取数据
 * fs.createWriteStream 写入文件
 */

// 判断当前目录下是否有upload目录，有则不做操作，没有创建目录。

const fs = require('fs'); // node内置模块
const mkdirp = require('mkdirp'); // 第三方模块 (支持多层级创建)

var path = 'upload';
fs.stat(path,(err,data)=>{
    if(err){
        //创建目录
        mkdir(path);
        return
    }
    if(data.isDirectory()){
        console.log('upload目录存在');
    }else{
        //创建目录
        mkdir(path);
    }
})

// 创建目录的方法
function mkdir(path){
    fs.mkdir(path,(err)=>{
        if(err){
            console.log(err);
        }
    })
}

// const made = mkdirp.sync('./tmp/foo/bar/baz')
// console.log(`made directories, starting with ${made}`);

// 打印出fs文件夹中的所有目录 放入一个数组 (使用递归的方式)

const newArr = [];
var path1 = '../fs';
fs.readdir(path1,(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    // console.log(data);
    (function getDir(i){
        if(i == data.length){
            console.log(newArr);
            return
        }
        fs.stat(path1 + '/' + data[i],(err,data1)=>{
            if(err){
                console.log(err);
                return
            }
            if(data1.isDirectory()){
                newArr.push(data[i]);
                // console.log(data1)
            }
            getDir(i+1);
        })
    })(0)
})

/**
 * 打印出fs文件夹中的所有目录 放入一个数组 (使用async的方式)
 * 1、定义一个isstat方法判断是否为目录
 * 2、获取fs文件夹下文件 循环遍历
 */

async function isstat(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
                return
            }
            if(data.isDirectory()){
                resolve(true)
            }else{
                resolve(false)
            }
        })
    })
}
(function main(){
    let newArr2 = [];
    fs.readdir(path1,async (err,data)=>{
        if(err){
            console.log(err);
            return
        }
        for(var i=0;i<data.length;i++){
            if(await isstat(path1 +'/'+ data[i])){
                newArr2.push(data[i]);
            }
        }
        console.log(newArr2);
    })
})()

// 读取package.json文件中的内容 从文件流中读取数据
var fileRead = fs.createReadStream('./package.json'); 
var count = 0,str='';
fileRead.on('data',(chunk)=>{
    console.log(`${++count} 接收到：${chunk.length}`);
    str += chunk;
})
fileRead.on('end',()=>{
    console.log(`end,${str},${count}`);
})
fileRead.on('error',(error)=>{
    console.log(error);
})

// 在test.txt文件中写入数据
var fileWrite = fs.createWriteStream('./text.txt');
var textWrite = "今天是六一儿童节";
// 使用utf8格式写入数据
fileWrite.write(textWrite,'UTF8');
// 标记文件末尾
fileWrite.end();
// 处理流事件
fileWrite.on('finish',()=>{
    console.log('写入数据完成');
})
fileWrite.on('error',(error)=>{
    console.log(error);
})

// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传 递到另外一个流中。
var imgRead = fs.createReadStream('./t13.jpg'); 
var imgWrite = fs.createWriteStream('./upload/img.jpg');
fileRead.pipe(fileWrite);