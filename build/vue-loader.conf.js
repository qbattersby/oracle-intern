var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    'silentbox-single': 'src',
    video: 'src',
    source: 'src',
    img: ['src', 'data-src'],
    image: 'xlink:href'
  }
}
