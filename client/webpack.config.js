const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'production',
  mode: 'development',
  watch: !false,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 1000, // 每秒检查一次变动
  },
  entry: './client/src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../assets'),
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: './index.html'
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + './'
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          // 'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
            loader: 'url-loader',
            options: {//配置额外参数
                limit: 1024, //限制转base64的图片为1k(1024b)，超过1k的以url返回,设置此项需要安装依赖：file-loader，会将图片传到public下
                publicPath: '/',
                // publicPath: '/assets/',
                name: 'images/[hash:8].[name].[ext]'
                // outputPath: './img' //指定输出路径：放到public下的img文件下，如果没有则会自动新建,并且路片路径自动变成img/***.***
            }
        }]
      }
    ],
  },
}
