const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)
const Db = require('./module/db.js'); //引入mongodb库
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
  .get('/',async (ctx, next) => {
    console.time('start');
    var result=await Db.find('userinfo',{});
    console.timeEnd('start');
    ctx.body = result; // 原生信息 相当于 res.writeHead()  res.end()
    if(result.ok = 1){
        await ctx.render('index',{list:result})
    }else{
        ctx.body = '查询数据失败';
    }
  })
  .get('/users',async (ctx, next) => { 
    console.time('start1');
    var result=await Db.find('userinfo',{});
    console.timeEnd('start1');
    ctx.body = 'Hello koa-router!';
  })
  .get('/add',async (ctx,next)=>{
    let result = await Db.insert('userinfo',{"username":"王五","sex":"女","age":"25","like":["听音乐","看电视"]});
    ctx.body = result.ok = 1?'添加数据成功':'添加数据失败';
  })
  .get('/updata',async (ctx,next)=>{
    let result = await Db.updata('userinfo',{"username":"王五","sex":"女"},{"username":"王五","sex":"男"});
    ctx.body = result.ok = 1?'修改数据成功':'修改数据失败';
  })
  .get('/remove',async (ctx,next)=>{
    let result = await Db.remove('userinfo',{"username":"王五"});
    ctx.body = result.ok = 1?'删除数据成功':'删除数据失败';
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