/**mongodb数据库配置文件 */

// 定义连接数据库的地址 集合名称
const app = {
    dbUrl: 'mongodb://localhost:27017/',
    dbName: 'server01',
    smtp: {
        get host() {
            return 'smtp.qq.com'
        },
        get user() {
            return '2621275142@qq.com' // qq邮箱名
        },
        get pass() {
            return 'jkhrgzgopqkbdibe' // qq邮箱授权码
        },
        // 邮箱验证码
        get code() {
            return () => {
                return Math.random()
                    .toString(16)
                    .slice(2, 6)
                    .toUpperCase()
            }
        },
        // 定义验证码过期时间rules，5分钟内邮箱
        get expire() {
            return () => {
                return new Date().getTime() + 5 * 60 * 1000
            }
        }
    },
    redis: {
        get host() {
            return '127.0.0.1'
        },
        get port() {
            return 6379
        }
    }
}

module.exports = app;