const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)

// 实例化
const app = new Koa();
const router = new Router();

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!'; // 原生信息 相当于 res.writeHead()  res.end()
  })
  .get('/users/:id', (ctx, next) => { // 动态路由传值
    console.log(ctx.params);
    ctx.body = 'Hello koa-router!';
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