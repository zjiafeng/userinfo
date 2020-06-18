const Koa = require('koa'); // 引入koa2模块
const Router = require('koa-router'); // 引入koa-router模块(https://github.com/koajs/router/blob/master/API.md)
const Db = require('./module/db.js'); //引入mongodb库
const path = require('path');
const serve = require('koa-static'); //引入koa_static模块
const render = require('koa-art-template'); //引入template模板
const bodyParser = require('koa-bodyparser'); //引入koa-bodyparser模板
// 实例化
const app = new Koa();
const router = new Router();
app.use(serve('.'));
app.use(bodyParser());

render(app, {
    root: path.join(__dirname, 'views'), // 模板引擎位置
    extname: '.html', // 文件后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

// 配置路由 (ctx 上下文context , 包含request 和 response 信息)
router
    .get('/', async (ctx, next) => {
        console.time('start');
        var result = await Db.find('userinfo', {});
        console.timeEnd('start');
        ctx.body = result; // 原生信息 相当于 res.writeHead()  res.end()
        if (result.ok = 1) {
            await ctx.render('index', { list: result })
        } else {
            ctx.body = '查询数据失败';
        }
    })
    .get('/users', async (ctx, next) => {
        console.time('start1');
        var result = await Db.find('userinfo', {});
        console.timeEnd('start1');
        ctx.body = 'Hello koa-router!';
    })
    .get('/add', async (ctx, next) => {
        await ctx.render('add');
    })
    .post('/doadd', async (ctx, next) => {
        let data = await Db.insert('userinfo', ctx.request.body);
        try {
            if (data.result.ok) {
                ctx.redirect('/')
            }
        } catch (err) {
            console.log(err);
            return;
        }
    })
    .get('/updata', async (ctx, next) => {
        //通过get传过来的id来获b取用户信息
        let id = ctx.query.id;
        let data = await Db.find('userinfo', { "_id": Db.getObjectId(id) });
        //获取用户信息
        await ctx.render('updata', {
            list: data[0]
        });
    })
    .post('/doupdata', async (ctx) => {
        //通过get传过来的id来获取用户信息
        //console.log(ctx.request.body);

        var id = ctx.request.body.id;
        var username = ctx.request.body.username;
        var age = ctx.request.body.age;
        var sex = ctx.request.body.sex;
        var like = ctx.request.body.like;

        let data = await Db.updata('userinfo', { "_id": Db.getObjectId(id) }, {
            username, age, sex , like
        })

        try {
            if (data.result.ok) {
                ctx.redirect('/')
            }
        } catch (err) {
            console.log(err);
            return;
        }

    })
    .get('/remove', async (ctx, next) => {
        let id = ctx.query.id;

        var data = await Db.remove('userinfo', { "_id": Db.getObjectId(id) });
        console.log(data);
        if (data) {
            ctx.redirect('/')
        }
    })
// 路由中间件 (拦截)
app.use(async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        ctx.body = '这是个404页面'
    } else {
        console.log(ctx.url)
    }
})

// 启动路由
app
    .use(router.routes())
    .use(router.allowedMethods());

// 监听端口
app.listen(3000);