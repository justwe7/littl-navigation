$.extend({
  /* jsonp 重写 webpack打包 原生的方法定义不会挂载到window下 */
  jsonp2: (function () {
    function jsonp2 (val, cb/* , type = 'baidu' */) {
      window._parseCb = (data) => {
        cb(data.s);
      };
      // const TYPES = {
      // }
      const oScript = document.createElement('script');
      oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + val + '&cb=_parseCb';
      document.body.appendChild(oScript);
      document.body.removeChild(oScript);
    }
    return function (kw) {
      return new Promise((resolve) => {
        jsonp2(kw, resolve);
      });
    };
  })()
});
