// 引入mongodb下面的MongoClient
const MongoClient = require('mongodb').MongoClient; 

// 定义连接数据库的地址
var MongoUrl = 'mongodb://localhost:27017/',dbName = 'shop';

//连接数据库+添加数据
MongoClient.connect(MongoUrl,(err,client)=>{

    if(err){
        console.log('数据连接失败');
        return false;
    }
    let db=client.db(dbName);   /*获取db对象*/

    db.collection("admin").insert({"name":"mongodb","age":10},function(err){

        if(err){
            console.log('增加失败');
            return false;
        }
        console.log('增加成功');
        client.close();  /*关闭数据库*/
    })

})

// 连接数据库+修改数据
MongoClient.connect(MongoUrl,(err,client)=>{
    if(err){
        console.log('连接数据库失败');
        return false
    }
    let db = client.db(dbName); //获取db对象
    db.collection("admin").updateMany({name:"mongodb"},{$set:{
        age:"20"
    }},(err,result)=>{
        if(err){
            console.log(err + '修改失败');
            return false
        }
        console.log(result + '修改成功');
        client.close();  //关闭数据库
    })
})

// 连接数据库+查找数据
MongoClient.connect(MongoUrl,(err,client)=>{
    if(err){
        console.log(err + '连接数据库失败');
    }
    let db = client.db(dbName);
    let newArr = [];
    let list = db.collection('admin').find();
    console.log(list);
    list.each((err,result)=>{
        if(err){
            console.log(err + '查找数据错误');
            return false
        }else if(result != null){
            newArr.push(result)
        }else{
            console.log(newArr);
            client.close(); //关闭数据库
        }
    })
    
})

// 连接数据库+删除数据
MongoClient.connect(MongoUrl,(err,client)=>{
    if(err){
        console.log(err + '连接数据库失败');
    }
    let db = client.db(dbName);
    db.collection("admin").deleteMany({"name":"mongodb"},function(err){

        if(err){
            console.log('删除失败');
            return false;
        }
        console.log('删除成功');
        client.close();  /*关闭数据库*/
    })
})