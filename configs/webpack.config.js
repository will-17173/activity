var path = require('path')
  , glob = require("glob")
  , webpack = require("webpack")
  , __DEV__ = process.env.NODE_ENV === 'development'
  , src_root = process.env.SOURCE_PATH || ''
  , dist_root = process.env.BUILD_CDN_PATH || ''

module.exports = glob.sync(path.join(src_root, './**/*.entry.js'))
  .map(function(entryPath) {
    var entryName = path.basename(entryPath, '.entry.js')
      , relativeEntryPath = path.relative(src_root, entryPath)
      , outputPath = path.join(__DEV__ ? src_root : dist_root, relativeEntryPath, '../')

    return {
      entry: {
        [entryName]: entryPath
      }
    , externals: {
        'jquery': 'jQuery'
      }
    , resolve: {
        root: path.join(src_root, './js')
      }
    , output: {
        path: outputPath
      , filename: '[name].bundle.js'
      }
    , debug: false
    , devtool: false
    , module: {
        loaders: [
          { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
      }
    , plugins: __DEV__
        ? []
        : [ new webpack.optimize.UglifyJsPlugin() ]
    }
  })
