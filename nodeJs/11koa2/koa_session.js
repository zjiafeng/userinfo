const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)
const serve = require('koa-static'); //引入koa_static模块
const session = require('koa-session'); // 引入koa-session模块

// 实例化
const app = new Koa();
const router = new Router();

app.keys = ['some secret hurr']; /**作为cookies签名时的秘钥*/
 
const CONFIG = {
  key: 'koa.sess', /** 默认*/
  maxAge: 5000, /** cookie过期时间 */
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  secure: false, /** 设置为true，则只应通过被 HTTPS 协议加密过的请求发送给服务端 (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};
 
app.use(session(CONFIG, app));
app.use(serve('.'));

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router
  .get('/',async (ctx, next) => {
    ctx.session.username = '张三';
    ctx.body = 'Hello World!'; // 原生信息 相当于 res.writeHead()  res.end()
  })
  .get('/session',async (ctx, next) => { // 动态路由传值
    console.log(ctx.session.username);
    ctx.body = ctx.session.username;
  })

// 路由中间件 (拦截)
app.use(async (ctx,next)=>{
  await next();
  if(ctx.status == 404){
    ctx.body = '这是个404页面'
  }else{
    // console.log(ctx.url)
  }
})

// 启动路由
app
  .use(router.routes())
  .use(router.allowedMethods());

// 监听端口
app.listen(3000);