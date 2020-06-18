/**引入所需模块 */
const Koa = require('koa'),
    Router = require('koa-router'),
    render = require('koa-art-template'),
    path = require('path'),
    svgCaptcha = require('svg-captcha'),
    session = require('koa-generic-session'),
    Redis = require('koa-redis'),
    bodyParser = require('koa-bodyparser'),
    serve = require('koa-static');

/**实例化 */
const app = new Koa();
const router = new Router();

// 配置koa-art-template 模板引擎
render(app, {
    root: path.join(__dirname, 'views'), // 模板引擎位置
    extname: '.html', // 文件后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

//引入子模块
var api=require('./routes/api.js');
var index=require('./routes/index.js');

//配置路由
router.use('/api',api);   /*在模块里面暴露路由并且启动路由*/
router.use(index);

// 路由中间件 (拦截)
app.use(async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        ctx.body = '404. 抱歉，您访问的资源不存在'
    } else {
        // console.log(ctx.url)
    }
})

app.use(bodyParser()); // 必须放到启动路由前调用
app.use(serve(__dirname + '/public')); //启动koa-static
// 一些session和redis相关配置
app.keys = ['keys', 'keykeys']; 
app.use(session({
    store: new Redis()
}));
app.use(router.routes()).use(router.allowedMethods()); //启动路由 必须放在其他模块后
app.listen(3000);