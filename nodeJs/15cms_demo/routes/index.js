var router = require('koa-router')(),svgCaptcha = require('svg-captcha');

router.get('/', async (ctx) => {

    await ctx.render('default/index');
})
//注意 前台后后台匹配路由的写法不一样
router.get('/case', (ctx) => {

    ctx.body = '案例'
})

router.get('/about', async (ctx) => {

    await ctx.render('default/about');
})

router.get('/captcha', async (ctx) => {
    // 验证码配置
    let cap = svgCaptcha.create({
        size: 4, // 验证码长度
        width: 160,
        height: 60,
        fontSize: 50,
        ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background: '#409EEF' // 验证码图片背景颜色
    })
    let img = cap.data // 验证码
    let text = cap.text.toLowerCase() // 验证码字符，忽略大小写
    ctx.type = 'html'
    ctx.body = `${img}<br><a href="javascript: window.location.reload();">${text}</a>`
});

module.exports = router.routes();