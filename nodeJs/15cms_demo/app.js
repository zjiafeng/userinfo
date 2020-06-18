/**引入所需模块 */
const Koa = require('koa'),
    Router = require('koa-router'),
    render = require('koa-art-template'),
    path = require('path'),
    svgCaptcha = require('svg-captcha'),
    session = require('koa-session'),
    bodyParser = require('koa-bodyparser'),
    serve = require('koa-static');

/**实例化 */
const app = new Koa();
const router = new Router();

const CONFIG = { //配置session参数
    key: 'koa.sess', /** 默认*/
    maxAge: 864000, /** cookie过期时间 */
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false, /** 设置为true，则只应通过被 HTTPS 协议加密过的请求发送给服务端 (boolean) secure cookie*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};
// 配置koa-art-template 模板引擎
render(app, {
    root: path.join(__dirname, 'views'), // 模板引擎位置
    extname: '.html', // 文件后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

//引入子模块
var admin=require('./routes/admin.js');
var api=require('./routes/api.js');
var index=require('./routes/index.js');

//配置路由
router.use('/admin',admin);
router.use('/api',api);   /*在模块里面暴露路由并且启动路由*/
router.use(index);

// 路由中间件 (拦截)
app.use(async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        ctx.body = '这是个404页面'
    } else {
        // console.log(ctx.url)
    }
})

app.use(bodyParser()); // 必须放到启动路由前调用
app.use(serve(__dirname + '/public')); //启动koa-static
app.keys = ['some secret hurr']; /**作为cookies签名时的秘钥*/
app.use(session(CONFIG, app)); //启动session
app.use(router.routes()).use(router.allowedMethods()); //启动路由 必须放在其他模块后
app.listen(3000);