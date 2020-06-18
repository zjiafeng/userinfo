var router = require('koa-router')();
var tools = require('../../util/tool.js');
var Db = require('../../util/db.js');
var nodeMailer = require('nodeMailer');
var Config = require('../../util/conf'); //引入配置文件
var Redis = require('koa-redis'); 
var checkToken = require('../../util/checkToken');
// 获取redis的客户端
const Store = new Redis().client

// 发送验证码
router.post('/verify', async (ctx, next) => {
    const username = ctx.request.body.username;
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire') // 拿到过期时间

    console.log(ctx.request.body)
    console.log('当前时间:', new Date().getTime())
    console.log('过期时间：', saveExpire)

    // 检验已存在的验证码是否过期，以限制用户频繁发送验证码
    if (saveExpire && new Date().getTime() - saveExpire < 0) {
        ctx.body = {
            code: -1,
            msg: '发送过于频繁，请稍后再试'
        }
        return
    }

    // QQ邮箱smtp服务权限校验
    const transporter = nodeMailer.createTransport({
        /**
         *  端口465和587用于电子邮件客户端到电子邮件服务器通信 - 发送电子邮件。
         *  端口465用于smtps SSL加密在任何SMTP级别通信之前自动启动。
         *  端口587用于msa
         */
        host: Config.smtp.host,
        port: 587,
        secure: false, // 为true时监听465端口，为false时监听其他端口
        auth: {
            user: Config.smtp.user,
            pass: Config.smtp.pass
        }
    })

    // 邮箱需要接收的信息
    const ko = {
        code: Config.smtp.code(),
        expire: Config.smtp.expire(),
        email: ctx.request.body.email,
        username: ctx.request.body.username
    }

    // 邮件中需要显示的内容
    const mailOptions = {
        from: `"认证邮件" <${Config.smtp.user}>`, // 邮件来自
        to: ko.email, // 邮件发往
        subject: '邀请码', // 邮件主题 标题
        html: `用户${ko.username}，您正在注册****，您的邀请码是${ko.code}` // 邮件内容
    }

    // 执行发送邮件
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log('发送邮件失败')
        } else {
            console.log(`nodemail:${ko.username}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email);
            Store.hmset(`nodemail:${ko.username}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
        }
    })

    ctx.body = {
        code: 0,
        msg: '验证码已发送，请注意查收，可能会有延时，有效期5分钟'
    }
})

// 注册接口
router.post('/register', async (ctx) => {
    let { username, password, email, code } = ctx.request.body
    console.log(ctx.request.body);
    if (code) {
        const saveCode = await Store.hget(`nodemail:${username}`, 'code') // 拿到已存储的真实的验证码
        const saveExpire = await Store.hget(`nodemail:${username}`, 'expire') // 过期时间

        console.log(ctx.request.body)
        console.log('redis中保存的验证码：', saveCode)
        console.log('当前时间:', new Date().getTime())
        console.log('过期时间：', saveExpire)

        // 用户提交的验证码是否等于已存的验证码
        if (code === saveCode) {
            if (new Date().getTime() - saveExpire > 0) {
                ctx.body = {
                    code: -1,
                    msg: '验证码已过期，请重新申请'
                }
                return
            }
        } else {
            ctx.body = {
                code: -1,
                msg: '请填写正确的验证码'
            }
            return
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '请填写验证码'
        }
        return
    }

    // 用户名是否已经被注册
    const user = await Db.find('userlist', {"username":username})
    if (user.length) {
        ctx.body = {
            code: -1,
            msg: '该用户名已被注册'
        }
        return
    }
    // 如果用户名未被注册，则写入数据库
    const newUser = await Db.insert('userlist',{
        username,
        password,
        email,
        token: tools.createToken(this.username) // 生成一个token 存入数据库
    })
    // console.log(newUser);
    // 如果用户名被成功写入数据库，则返回注册成功
    if (newUser.ok = 1) {
        ctx.body = {
            code: 0,
            msg: '注册成功',
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '注册失败'
        }
    }
})

// 登录接口
router.post('/login',async (ctx)=>{
    let {username, password} = ctx.request.body;
    result = await Db.find('userlist',{username});
    console.log(result);
    if(!result){
        ctx.body = {
            code: -1,
            msg: '用户名不存在'
        }
    }else if(result[0].password != password){
        ctx.body = {
            code: -1,
            msg: '用户密码错误'
        }
    }else if(result[0].password == password){
        let token = tools.createToken(username)
        // console.log(token)
        try {
            await Db.updata('userlist',{username:username},{token:token});
            ctx.body = {
                code: 0,
                msg: '登录成功',
                data: [
                    {username,token}
                ]
            }
        } catch (error) {
            ctx.body = {
                code: -1,
                msg: '登录失败,请重新登录'
            }
        }
    }
})

// 获取所有用户列表
router.get('/getAlluser',checkToken, async (ctx)=>{
    ctx.body = '用户查找'
    try {
        let newArr = [];
        let result = await Db.find('userlist',{});
        result.map((value,index)=>{
            newArr.push({
                username: value.username,
                email: value.email
            })
        })
        console.log(result);
        ctx.body = {
            code: 0,
            msg: '用户查询成功',
            data: [{newArr}]
        }
    } catch (error) {
        ctx.body = {
            code: -1,
            msg: '查找失败',
            result: err
        }
    }
})
module.exports = router.routes();
