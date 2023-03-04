const path = require('path')
// const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const zlib = require('zlib')
// const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 5000,
    proxy: {
      '/elementUI': {
        target: 'https://element.eleme.cn/#/zh-CN/',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/elementUI': '' },
      },
    },
    disableHostCheck: true,
  },
  // configureWebpack: {
  //   resolve: {
  //     extensions: ['.js', '.vue', '.json'],
  //     alias: {
  //       api: resolve('src/api'),
  //       assets: resolve('src/assets'),
  //       images: resolve('src/assets/image'),
  //       util: resolve('src/assets/js/util/index.ts'),
  //       views: resolve('src/views'),
  //       mixins: resolve('src/mixins'),
  //       components: resolve('src/components'),
  //     },
  //   },
  //   // plugins: [
  //   //   // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  //   //   // 压缩成 .gz 文件
  //   //   new CompressionPlugin({
  //   //     filename: '[path][base].gz',
  //   //     algorithm: 'gzip',
  //   //     test: /\.js$|\.css$|\.html$/,
  //   //     threshold: 10240,
  //   //     minRatio: 0.8
  //   //   }),
  //   //   // 压缩成 .br 文件，如果 zlib 报错无法解决，可以注释这段使用代码，一般本地没问题，需要注意线上服务器会可能发生找不到 zlib 的情况。
  //   //   new CompressionPlugin({
  //   //     filename: '[path][base].br',
  //   //     algorithm: 'brotliCompress',
  //   //     test: /\.(js|css|html|svg)$/,
  //   //     compressionOptions: {
  //   //       params: {
  //   //         [zlib.constants.BROTLI_PARAM_QUALITY]: 11
  //   //       }
  //   //     },
  //   //     threshold: 10240,
  //   //     minRatio: 0.8
  //   //   })
  //   // ]
  // },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: {
          vue: 'Vue',
          vuex: 'Vuex',
          'vue-router': 'VueRouter',
          'element-ui': 'ELEMENT',
          lodash: '_',
        },
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
            api: resolve('src/api'),
            assets: resolve('src/assets'),
            images: resolve('src/assets/image'),
            util: resolve('src/assets/js/util/index.ts'),
            views: resolve('src/views'),
            mixins: resolve('src/mixins'),
            components: resolve('src/components'),
          },
        },
        plugins: [
          new CompressionWebpackPlugin({
            test: /\.(js|css)(\?.*)?$/i, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
            deleteOriginalAssets: false, // 是否删除原文件
          }),
        ],
      }
    } else
      return {
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
            api: resolve('src/api'),
            assets: resolve('src/assets'),
            images: resolve('src/assets/image'),
            util: resolve('src/assets/js/util/index.ts'),
            views: resolve('src/views'),
            mixins: resolve('src/mixins'),
            components: resolve('src/components'),
          },
        },
      }
  },
  chainWebpack: (config) => {
    const cdn = {
      css: ['https://unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css'],
      js: [
        'https://unpkg.com/vue@2.6.14/dist/vue.min.js',
        'https://unpkg.com/vuex@3.6.2/dist/vuex.min.js',
        'https://unpkg.com/vue-router@3.5.3/dist/vue-router.min.js',
        'https://unpkg.com/lodash@4.17.21/lodash.min.js',
        'https://unpkg.com/element-ui@2.15.6/lib/index.js',
      ],
    }

    // html中添加cdn
    config.plugin('html').tap((args) => {
      args[0].title = 'placard'
      args[0].cdn = cdn
      return args
    })
  },
}
