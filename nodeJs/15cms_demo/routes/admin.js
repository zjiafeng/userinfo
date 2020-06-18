var router=require('koa-router')();

var login = require('./admin/login.js');
var user=require('./admin/user.js');

// 配置中间件 获取url的地址
router.use(async (ctx,next)=>{
    ctx.state._HOST_ = 'http://' + ctx.request.header.host;
    // console.log(ctx.session.userinfo)
    if(ctx.session.userinfo){
        await next();
    }else{
        if(ctx.url == '/admin/login' || ctx.url == '/admin/login/doLogin' ){
            await next();
        }else{
            ctx.redirect('/admin/login');
        }
        
    }
})

//配置admin的子路由  层级路由
router.get('/',async (ctx,next)=>{
    await ctx.render('admin/user/index');
})

router.use('/login',login);
router.use('/user',user);

module.exports=router.routes();