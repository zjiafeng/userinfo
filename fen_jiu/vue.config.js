const webpack = require('webpack')

module.exports = {
  publicPath: './', //部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'fenjiu', //运行时生成的生产环境构建文件的目录(默认'dist'，构建之前会被清除)
  assetsDir: '', //静态资源目录(js、css、img、fonts)，相对outputDir的目录(默认'')
  indexPath: 'index.html', //指定生成index.html的输出路径(相对outputDir)也可以是绝对路径
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  devServer: { //环境配置
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true
  },
  chainWebpack: config => {
    config.resolve.symlinks(true);
  },
  configureWebpack: {
    plugins: [
       new webpack.ProvidePlugin({
         $:"jquery",
         jQuery:"jquery",
         "windows.jQuery":"jquery"
       })
     ]
 }
};