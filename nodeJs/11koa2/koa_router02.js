const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)

// 实例化
const app = new Koa();
const router = new Router();

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!'; // 原生信息 相当于 res.writeHead()  res.end()
    /* 
     在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
     query：返回的是格式化好的参数对象。
     querystring：返回的是请求字符串。
    */
   console.log(ctx.query); //{ id: '1' } 获取对象
   console.log(ctx.querystring); // id=1 获取字符串
   
   console.log(ctx.request.query); //{ id: '1' } 获取对象
   console.log(ctx.request.querystring); // id=1 获取字符串
})
  

// 启动路由
app
  .use(router.routes())
  .use(router.allowedMethods());

// 监听端口
app.listen(3000);