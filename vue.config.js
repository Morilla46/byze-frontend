const path = require('path')
const webpack = require('webpack')
const resolve = dir => {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
const min = isProduction ? '.min' : ''

// cdn链接
const cdn = [
  `https://cdn.bootcss.com/vue/2.5.2/vue${min}.js`,
  `https://cdn.bootcss.com/vue-router/3.0.1/vue-router${min}.js`,
  `https://cdn.bootcss.com/vuex/3.0.1/vuex${min}.js`,
  `https://cdn.bootcss.com/axios/0.18.0/axios${min}.js`
]

module.exports = {
  publicPath: '',
  lintOnSave: true,
  configureWebpack: config => {
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 跨域代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.214.92.172:10086/api/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
