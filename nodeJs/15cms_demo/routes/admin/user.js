var router=require('koa-router')();

router.get('/',async (ctx)=>{
    //ctx.body='用户首页';
    await ctx.render('admin/user/index');
})

router.get('/index',async (ctx)=>{
    //ctx.body='用户首页';
    await ctx.render('admin/user/index');
})

router.get('/add',async (ctx)=>{
    await ctx.render('admin/user/add');
})


router.get('/list',async (ctx)=>{
    await ctx.render('admin/user/list');
})

module.exports=router.routes();