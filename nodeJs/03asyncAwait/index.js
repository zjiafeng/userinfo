// 处理异步方法 calback回调  promise

function getData(calback){
    setTimeout(function(){
        var name = '张三1';
        calback(name);
    },500);
}
getData(function(name){
    console.log(name)
});


function pro(resolve,reject){
    setTimeout(function(){
        var name = '张三2';
        resolve(name);
    },500);
}
var p = new Promise(pro);
p.then((res)=>{
    console.log(res);
})

// async 和 await (async返回的是promise对象，await必须写在async中，用来获取异步方法里的数据)

async function testAsync(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var name = '张三3';
            resolve(name);
        },500)
    })
}
async function main(){
    console.log(await testAsync());
}
main();