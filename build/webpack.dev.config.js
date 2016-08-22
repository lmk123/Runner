const webpack = require('webpack')
const OpenPack = require('openpack')
const Combine = require('./Combine')
const config = require('./webpack.base.config')

config.watch = true
config.plugins.push(new Combine({
  js: [
    './node_modules/fastclick/lib/fastclick.js',
    './node_modules/lodash/lodash.js',
    './node_modules/vue/dist/vue.js',
    './node_modules/vue-router/dist/vue-router.js',
    './node_modules/vuex/dist/vuex.js'
  ],
  hash: false,
  jsMinify: false
}))
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"development"'
  }
}))
config.plugins.push(new OpenPack({ lan: true }))
config.devServer = {
  noInfo: true,
  host: '0.0.0.0',
  port: '13456',
  contentBase: './path-to-static-dir'
}

module.exports = config
