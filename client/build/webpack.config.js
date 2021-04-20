const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩js
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css
const utils = require('./utils');

const resolve = dir => path.resolve(__dirname, dir)

const isProd = process.env.NODE_ENV === 'production'

// 区分环境打包的配置，懒得新建文件了
const isMergeConf = isProd ? {} : {
  devtool: 'source-map',
  target: 'web'
}

module.exports = {
  // mode: 'production',
  ...isMergeConf,
  devServer: { // https://github.com/webpack/webpack-dev-server/issues/2759
    port: 3000,
    contentBase: '../dist',
    // hot: true
  },
  watch: !isProd,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 1000, // 每秒检查一次变动
  },
  // entry: './client/src/main.js',
  entry: utils.getJsEntry(),
  output: {
    filename: 'js/[name].js',
    // filename: 'js/[name]-[chunkhash:8].js',
    path: resolve('../../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...utils.getTplEntry(),
    // new HtmlWebpackPlugin({
    //   multihtmlCatch: true, // 开启多入口缓存
    //   // hash: true,
    //   inject: 'body',
    //   chunks: ["index", "vendor", "manifest"], // 每个html引用的js模块
    //   filename: 'index.html',
    //   template: resolve('../src/views/index/index.html')
    // }),
    // new HtmlWebpackPlugin({
    //   multihtmlCatch: true, // 开启多入口缓存
    //   inject: 'body',
    //   filename: 'slink.html',
    //   chunks: ["slink", "vendor", "manifest"], // 每个html引用的js模块
    //   template: resolve('../src/views/slink/slink.html')
    //   // template: path.resolve(__dirname, '../src/modules/slink.html')
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      // filename: 'css/[name]-[chunkhash:8].css',
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery',
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        notes: ['running at http://localhost:3000']
      },
      clearConsole: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          !isProd ? 'style-loader' :
            {
              loader: MiniCssExtractPlugin.loader, // 不支持热更新 开发环境不启用
              options: {
                publicPath: (resourcePath, context) => {
                  return path.relative(path.dirname(resourcePath), context) + './'
                },
              },
            },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // plugins: [
                //   require('autoprefixer')
                // ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|ico)$/,
        use: [{
          loader: 'url-loader', // 解决css中图片引入
          options: {//配置额外参数
            limit: 1024, //限制转base64的图片为1k(1024b)，超过1k的以url返回,设置此项需要安装依赖：file-loader，会将图片传到public下
            publicPath: '/',
            // publicPath: '/assets/',
            name: 'images/[name].[ext]'
            // name: 'images/[name]-[hash:8].[ext]'
            // outputPath: './img' //指定输出路径：放到public下的img文件下，如果没有则会自动新建,并且路片路径自动变成img/***.***
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './src')],
        use: ['babel-loader', {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: true,
            fix: true,
            cache: true
          }
        }],
      },
      {
        test: /\.(htm|html)$/i,
        use: {
          loader: 'html-loader', // 解决html中的图片引入问题 -- 也可以用来玩hbs模板
          options: {
            minimize: isProd,
            attributes: true
          }
        }
      }
    ],
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            //打包公共模块
            commons: {
                chunks: 'initial', //initial表示提取入口文件的公共部分
                minChunks: 2, //表示提取公共部分最少的文件数
                minSize: 0, //表示提取公共部分最小的大小
                name: 'vendor' //提取出来的文件命名
            }
        }
    },
    // OHH: minimize minimizer共同配置会导致minimize不生效 js不压缩
    minimize: isProd,
    // minimizer: [
    //   // 使用它 webpack5又会打印好多警告 -- 先使用默认压缩方式 日后再说
    //   // new UglifyJsPlugin({
    //   //   cache: true,
    //   //   parallel: true,
    //   //   sourceMap: true // set to true if you want JS source maps
    //   // }),
    //   // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
    //   // `...`,
    //   // new CssMinimizerPlugin(), // 提取单一css就需要需要配置单独的插件的 -- 加入插件导致js不能压缩
    // ],
  }
}
