// es5中类和静态方法

function Person(name,age){
    // 构造函数中的方法和属性
    this.name = name;
    this.age = age;
    this.run = function(){
        console.log(`${this.name}、${this.age}`);
    }
}

// 原型链上的属性和方法可以被多个实例共享 
Person.prototype.sex = "男";
Person.prototype.work = function(){
    console.log(`${this.name}、${this.age}、${this.sex}`);
}

// 静态方法
Person.setName = function(){
    console.log('静态方法');
}

var p = new Person('张三','24'); //实例方法是通过实例化调用的，静态方法是通过类名直接调用的。

p.run();
p.work();

// es5继承
/**
 * 原型链继承和对象冒充继承
 * 对象冒充继承：没法继承原型链上的属性和方法
 * 原型链继承：可以继承构造函数里面以及原型链上的属性和方法，实例化子类的时候没法给父类传参
 * 二者结合使用 实现继承
 */

function Person02(name,age){
    this.name = name;
    this.age = age;
    this.run = function(){
        console.log(this.name,this.age);
    }
}

function Web(name,age){
    Person02.call(this,name,age); /**对象冒充实现继承 */
}

Web.prototype = new Person02(); /**原型链继承 */

var w = new Web('李四',23);
w.run();