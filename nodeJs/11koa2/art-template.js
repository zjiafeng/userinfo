const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)
const path = require('path');
const serve = require('koa-static'); //引入koa_static模块
const render = require('koa-art-template'); //引入template模板

// 实例化
const app = new Koa();
const router = new Router();
app.use(serve('.'));

render(app, {
    root: path.join(__dirname, 'views'), // 模板引擎位置
    extname: '.html', // 文件后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!'; // 原生信息 相当于 res.writeHead()  res.end()
  })
  .get('/art', (ctx, next) => {
    let list = {
        name: '张三',
        arr: [1,2,3],
        boolean: true,
        html: '<h2>这是个h2标签</h2>'
    }
    ctx.render('index',{list})
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