var router = require('koa-router')(),svgCaptcha = require('svg-captcha'),Redis = require('koa-redis');

// 获取redis的客户端
const Store = new Redis().client

router.get('/', async (ctx) => {
    let list = {
        name: '张三',
        arr: [1,2,3],
        boolean: true,
        html: '<h2>这是个h2标签</h2>'
    }
    await ctx.render('index',{list});
})

router.get('/redis', async (ctx) => {
    await Store.hmset('test01','name','admin','count',2020)
    // 转化成对象
    ctx.body = '测试koa-redis'
})

router.get('/captcha', async (ctx) => {
    console.log(await Store.hget('nodemail:张三', 'expire'));
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