// es6类

class Person{
    constructor(name,age){ // 类的构造函数，new时执行，实例化时候执行
        this._name = name;
        this._age = age;
    }
    getName(){
        console.log(`姓名：${this._name}、年龄：${this._age}`);
    }
    setName(name){
        this._name = name;
    }
}

var p = new Person('张三',24);
p.setName('李四'); 
p.getName();

// es6继承
class Person02{
    constructor(name,age){ // 类的构造函数，new时执行，实例化时候执行
        this._name = name;
        this._age = age;
    }
    getInfo(){
        console.log(`姓名：${this._name}、年龄：${this._age}`);
    }
    run(){
        console.log('run');
    }
}

class Web extends Person02{
    constructor(name,age,sex){
        super(name,age); //实例化子类时候把子类的数据传给父类
        this.sex = sex;
    }
    print(){
        console.log(this.sex);
    }
}

var w = new Web('王五','30','男');
w.getInfo();
w.print();

// es6静态方法

class Person03{
    constructor(name){
        this._name = name;
    }
    static work(){
        console.log('这是es6中的静态方法');
    }
}

var s = new Person03();
Person03.work();