var router = require('koa-router')();

router.get('/test', async (ctx) => {
    // await ctx.render('index',{list});
    ctx.body = {title:'接口测试'}
})
module.exports = router.routes();