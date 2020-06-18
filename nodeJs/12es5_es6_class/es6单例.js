 class Db{
     static getInstance(){
        if(!Db.instance){ // 单例
            Db.instance = new Db();
        }
        return Db.instance;
     }
     constructor(){
         console.log('实例化会触发构造函数');
         this.connect();
     }
     connect(){
         console.log('连接数据库');
     }
     find(){
         console.log('查询数据库');
     }
 }

 var p = Db.getInstance();
 var p1 = Db.getInstance();
 var p2 = Db.getInstance();
 var p3 = Db.getInstance();
 p3.find();