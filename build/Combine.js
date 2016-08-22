var UglifyJS = require('uglify-js')
var crypto = require('crypto')
var path = require('path')
var nativeFS = require('fs')
var cwd = process.cwd()

module.exports = Combine

/**
 * 构造函数
 * @param options
 * @param {String[]} options.js - 需要合并的 js 文件的路径
 * @param {String} [options.filename="vendor"] - 合并后的文件名
 * @param {Boolean|Number} [options.hash=0] - hash 的长度, 传入一个非数字则不计算 hash, 传入 0 则不截取 hash
 * @param {Boolean|Object} [options.jsMinify={}] - https://github.com/mishoo/UglifyJS2#the-simple-way 的设置
 * @constructor
 */
function Combine (options) {
  this.options = Object.assign({
    filename: 'vendor',
    hash: 0,
    jsMinify: {}
  }, options)
}

Combine.prototype.apply = function (compiler) {
  var options = this.options
  var hash = options.hash
  var isHash = typeof hash === 'number'
  var jsFiles = options.js.map(function (filePath) { return path.resolve(cwd, filePath) })
  var jsMinify = options.jsMinify

  var code = jsMinify ? uglify(jsFiles, jsMinify) : combine(jsFiles)
  var hashStr = isHash ? ('.' + makeHash(code, hash)) : ''
  var jsName = options.filename + hashStr + '.js'

  // 如果有用到 html-webpack-plugin 则将文件加入到 assets 里面去
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      htmlPluginData.assets.js.unshift(jsName)
      callback(null, htmlPluginData)
    })
  })

  compiler.plugin('emit', function (compilation, next) {
    // 保证这个回调只执行一次, 即使是在 watch 模式下
    if (this.execd) return next()
    this.execd = true

    compilation.assets[jsName] = {
      source: function () {
        return code
      },
      size: function () {
        return code.length
      }
    }
    console.log('[Combine] File combined: ' + jsName)
    next()
  })
}

/**
 * 计算一个 hash
 * @param {String} str - 要计算的内容
 * @param {Number} [limit] - 要将 hash 截取到多少位
 * @return {String}
 */
function makeHash (str, limit) {
  var fullHash = crypto.createHash('md5').update(str, 'utf8').digest('hex')
  if (limit) {
    return fullHash.slice(0, limit)
  }
  return fullHash
}

/**
 * 使用 uglifyJS 精简文件
 * @param {String[]} files
 * @param {Object} [options] - https://github.com/mishoo/UglifyJS2#the-simple-way
 * @return {String}
 */
function uglify (files, options) {
  return UglifyJS.minify(files, options).code
}

/**
 * 合并文件内容
 * @param {String[]} files
 * @return {String}
 */
function combine (files) {
  return files.reduce(function (prevVal, path) {
    return prevVal + ';' + nativeFS.readFileSync(path, 'utf8')
  }, '')
}
