if (module.hot) {
  console.log(882228);
  module.hot.accept('./index.js', function () {
    console.log('Accepting the updated printMe module!');
  });
  // 关闭指定子模块的HMR
  // module.hot.decline('./extra.js')
}
