const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)
const views = require('koa-views'); // 引入koa-views模块
const bodyParser = require('koa-bodyparser'); // 引入bodyParser模块

// 实例化
const app = new Koa();
const router = new Router();
app.use(bodyParser());

// app.use(views('.' + '/views', {map: {html: 'ejs'}}));  // 引入ejs模块(这样配置文件后缀只能为.html)
app.use(views('views', { extension: 'ejs' })); //应用ejs模板引擎

// 路由中间件 (拦截)
app.use(async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        ctx.body = '这是个404页面'
    } else {
        console.log(ctx.url)
    }
})

// 公共数据
app.use(async function (ctx,next) {
    ctx.state = {
      username: '<h1>张三</h1>'
    };
    await next()
  });

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router
    .get('/', async (ctx, next) => {
        await ctx.render('index');
    })
    .get('/news', async (ctx, next) => {
        let list = [1,2,3];
        await ctx.render('news',{list});
    })
    .get('/users/:id',async (ctx, next) => { // 动态路由传值
        console.log(ctx.params);
        ctx.body = 'Hello koa-router!';
    })

router
    .post('/post', async (ctx, next) => { // 获取post传值
        ctx.body = ctx.request.body;
    })

// 启动路由
app
    .use(router.routes())
    .use(router.allowedMethods());

// 监听端口
app.listen(3000);