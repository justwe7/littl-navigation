/* 多入口 */
var exp = {};
module.exports = exp;
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const fs = require("fs");

exp.getJsEntry = function () {
  const viewModules = glob.sync('./client/src/views/*') // 目录下包含html js
  console.log(viewModules.reduce((result, target) => {
    const moduleName = target.split('/').slice(-1)[0]
    result.moduleName = `${target}/${moduleName}.js`
    return result
  }, {}))
  return viewModules.reduce((result, target) => {
    const moduleName = target.split('/').slice(-1)[0]
    result[moduleName] = `${target}/${moduleName}.js`
    return result
  }, {})
}

exp.getTplEntry = function () {
  const viewModules = glob.sync('./client/src/views/*') // 目录下包含html js
  return viewModules.map((item, index) => {
    const moduleName = item.split('/').slice(-1)[0]
    // item.moduleName = `${item}/${moduleName}.js`
    return new HtmlWebpackPlugin({
      multihtmlCatch: true, // 开启多入口缓存
      inject: 'body',
      filename: `${moduleName}.html`,
      chunks: [moduleName, 'vendor', 'manifest'], // 每个html引用的js模块
      template: `${item}/${moduleName}.html`
    })
  })
}

