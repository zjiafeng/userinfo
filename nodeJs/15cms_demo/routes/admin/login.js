var router=require('koa-router')();
var tools = require('../../util/tool.js');
var Db = require('../../util/db.js');
var svgCaptcha = require('svg-captcha');
router.get('/',async (ctx)=>{
    // 验证码配置
    let cap = svgCaptcha.create({
        size: 4, // 验证码长度
        width: 130,
        height: 34,
        fontSize: 50,
        ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background: '#409EEF' // 验证码图片背景颜色
    })
    var svgCaptcha_img = cap.data // 验证码
    var svgCaptcha_text = cap.text.toLowerCase() // 验证码字符，忽略大小写
    // console.log(svgCaptcha_text);
    ctx.session.svgCaptcha_text = svgCaptcha_text;
    await ctx.render('admin/login/index',{svgCaptcha_img,svgCaptcha_text});
})

router.post('/doLogin',async (ctx,next)=>{
    // ctx.body = 'dologin';
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let svgCaptcha = ctx.request.body.svgCaptcha;
    let result =await Db.find('admin',{username:username,password:tools.md5(password)});

    if(result.length > 0 && ctx.session.svgCaptcha_text == svgCaptcha){
        ctx.session.userinfo = result[0];
        ctx.redirect(ctx.state._HOST_ + '/admin');
    }else if(result.length === 0){
        console.log('svgCaptcha_text'+ctx.session.svgCaptcha_text)
        ctx.body = '用户不存在';
    }
})

module.exports=router.routes();