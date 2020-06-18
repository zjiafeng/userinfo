const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)
const serve = require('koa-static'); //引入koa_static模块

// 实例化
const app = new Koa();
const router = new Router();

app.use(serve('.'));

// cookie存入中文数据
function baseData(data){
    return new Buffer(data).toString('base64');
}
// cookie取出中文数据
function getbaseData(data){
    return new Buffer(data, 'base64').toString();
}

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router
  .get('/',async (ctx, next) => {
    ctx.cookies.set('username','zhangsan',{
        maxAge:1000*60, //一个数字表示从 Date.now() 得到的毫秒数 
        expires:'', //cookie 过期的Date
        httpOnly:false //是否只是服务器可访问 cookie, 默认是true 
    });
    ctx.cookies.set('sex',baseData('男'),{
        maxAge:1000*60, //一个数字表示从 Date.now() 得到的毫秒数 
        expires:'', //cookie 过期的Date
        httpOnly:false //是否只是服务器可访问 cookie, 默认是true 
    });
    ctx.body = 'Hello World!'; // 原生信息 相当于 res.writeHead()  res.end()
  })
  .get('/cookie',async (ctx, next) => { // 动态路由传值
    let sex = ctx.cookies.get('sex');
    ctx.body = getbaseData(sex);
  })

// 路由中间件 (拦截)
app.use(async (ctx,next)=>{
  await next();
  if(ctx.status == 404){
    ctx.body = '这是个404页面'
  }else{
    console.log(ctx.url)
  }
})

// 启动路由
app
  .use(router.routes())
  .use(router.allowedMethods());

// 监听端口
app.listen(3000);