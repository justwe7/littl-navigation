interface BaiduData {
  s: number
}

const obj = {
  a: 1
}

function a({a: number = 1, }) {
  
}

class Fo {
  ee: HTMLElement
  constructor(parameters) {
    this.ee = document.getElementById('dd')!
  }
}

const jsonp2 = (function () {
  function jsonp2 (val: string, cb: void) {
    window._JSONPCallBack = (data: BaiduData) => {
      cb(data.s);
    };
    // const TYPES = {
    // }
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