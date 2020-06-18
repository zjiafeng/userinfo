var router=require('koa-router')();

router.get('/',(ctx)=>{

    ctx.body={"title":"这是一个api"};
})

router.get('/newslist',(ctx)=>{

    ctx.body={"title":"这是一个新闻接口"};
})

router.get('/focus',(ctx)=>{

    ctx.body={"title":"这是一个轮播图的api"};
})

module.exports=router.routes();