const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Combine = require('./Combine')
const config = require('./webpack.base.config')

// https://github.com/kangax/html-minifier#options-quick-reference
const htmlMinifierOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  // vue-html-loader 默认设为了 true。设为 false 是为了让 html-minifier 不要在元素之间保留一个空格
  conservativeCollapse: false,
  removeAttributeQuotes: true,
  removeScriptTypeAttributes: true,
  removeStyleTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
}

require('fs-extra').removeSync('./dist')

config.output.filename = '[name].[chunkhash:7].js'
config.module.loaders[1].query.name = '[name].[hash:7].[ext]'

config.vue.html = htmlMinifierOptions

config.plugins = [
  new Combine({
    js: [
      './node_modules/fastclick/lib/fastclick.js',
      './node_modules/lodash/lodash.min.js',
      './node_modules/vue/dist/vue.min.js',
      './node_modules/vue-router/dist/vue-router.min.js',
      './node_modules/vuex/dist/vuex.min.js'
    ],
    hash: 7
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    minify: htmlMinifierOptions
  }),
  new ExtractTextPlugin('[name].[chunkhash:7].css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
]

module.exports = config
