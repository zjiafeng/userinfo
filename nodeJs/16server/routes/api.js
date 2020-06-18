var router=require('koa-router')();

var login = require('./api/login.js');
var index = require('./api/index.js');

//配置api的子路由  层级路由
router.get('/',async (ctx,next)=>{
    ctx.body = '接口模块'
})

router.use('/login',login);
router.use('/index',index);

module.exports=router.routes();