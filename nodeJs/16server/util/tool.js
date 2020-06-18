var md5 = require('md5'), jwt = require('jsonwebtoken');

let tools = {
    md5(str) {
        return md5(str);
    },
    createToken(user_id) {
        const token = jwt.sign(
            {
                user_id: user_id
            },
            'zhangjf',
            {
                expiresIn: '1h'
            }
        )

        return token
    }
}

module.exports = tools;