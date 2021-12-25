type BaiduData = {
  s: number
}

export default (function () {
  function jsonp2 (val: string, cb: any) {
    window._JSONPCallBack = (data: any) => {
      cb(data.s);
    };
    const oScript = document.createElement('script');
    oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + val + '&cb=_JSONPCallBack';
    document.body.appendChild(oScript);
    document.body.removeChild(oScript);
  }
  return function (kw: string) {
    return new Promise((resolve) => {
      jsonp2(kw, resolve);
    });
  };
})()