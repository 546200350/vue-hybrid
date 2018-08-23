'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require("webpack");
const glob = require("glob");

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const entries = {};
const configOptions = {
  context: path.resolve(__dirname, '../'),
  // entry: {
  //   app: './src/searchlist.js'
  // },
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 100,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loaders: [
          {
            loader: path.resolve(__dirname, 'cssPathResolver')
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
// 过滤打包文件，减少开发编译时间(仅打包配置后的入口文件)
// 正则过滤匹配
var regx = /(index\/index|home|class|bmap|me)/g;

//获取多入口文件
function getEntries() {
  glob.sync('./src/**/*.js').forEach(function (name) {
    var path = name.slice(name.lastIndexOf('src/') + 4, name.length - 3);
    console.log(path);
    if (process.env.NODE_ENV !== 'production') {
      if (regx.test(name)) {
        regx.lastIndex = 0;
        entries[path + ''] = name + '';
      }
    } else {
      entries[path] = name;
    }
  });
  console.log(entries);
}

getEntries();

module.exports = configOptions;
