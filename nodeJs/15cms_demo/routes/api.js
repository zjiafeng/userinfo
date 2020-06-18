var router=require('koa-router')();

router.get('/',async (ctx)=>{

    ctx.body={"title":"这是一个api"};
})

module.exports=router.routes();