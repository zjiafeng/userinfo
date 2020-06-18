const Koa = require('koa'); // 引入koa2模块
const app = new Koa();
const serve = require('koa-static'); //引入koa_static模块

app.use(serve('.'));

// 配置中间件
app.use(async (ctx)=>{
    ctx.body = 'hello koa2';
})

// 监听端口
app.listen(3000);