const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: 'localhost',    // 指定使用一个 host，默认是 localhost
    port: 8080,         // 端口地址
    proxy: {
      '^/baidu': {
        target: 'http://10.59.81.31:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/baidu': ''
        }
      },
      '^/default': {
        target: 'http://10.59.81.31:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/default': ''
        }
      },
    }
  },
  publicPath: './', // 打包后引用的资源路径
  outputDir: 'dist', // 打包目录
  chainWebpack: config => { // CLI内部webpack配置
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },

}

// 全局样式 变量、函数
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('src/styles/variables.less'),
        resolve('src/styles/mixin.less'),
      ],
    })
}
