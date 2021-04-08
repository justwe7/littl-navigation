import { debounce } from '../lib/utils';

const oInput = $('#key-ipt');
const oForecastList = $('#forecast');
let sugIndex = -1;
let sugList = [];

/* 联想 */
function suggestList (event, words) {
  if (![13, 37, 38, 39, 40].includes(event.keyCode)) {
    if (!words) {
      oForecastList.hide();
      sugIndex = -1;
      sugList = [];
      return false;
    }
    $.jsonp2(words).then(list => {
      if (list.length === 0) {
        return false;
      }
      sugList = list;
      let listHtmls = '';
      list.forEach(v => {
        listHtmls += `<li> <a target="_blank" href="https://www.baidu.com/s?wd=${v}">${v}</a></li>`;
      });
      oForecastList.html(listHtmls);
      oForecastList.show();
    });
  }
}

oInput.on('input', debounce(function (e) {
  suggestList(e, $.trim(oInput.val()));
}));
const keyCode = {
  13: 'enter',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};
const setInputVal = () => {
  const maxIndex = sugList.length - 1;
  if (sugIndex === -1) {
    sugIndex = maxIndex;
  } else if (sugIndex === maxIndex) {
    sugIndex = 0;
  }
  oForecastList.find('li').removeClass('cur');
  oForecastList.find('li').eq(sugIndex).addClass('cur');
  oInput.val(sugList[sugIndex]);
};
oInput.on('keydown', function (e) { // 方向键 && 回车
  const methodKey = keyCode[e.keyCode];

  switch (methodKey) {
    case 'up':
      sugIndex--;
      setInputVal();
      break;

    case 'down':
      sugIndex++;
      setInputVal();
      break;
    case 'enter':
      window.open('https://www.baidu.com/s?wd=' + oInput.val());
      break;

    default:
      break;
  }
  // console.log(e);
  // suggestList(e, $.trim(oInput.val()));
});
// oInput.on('blur', function (e) {
//   setTimeout(() => {
//     oForecastList.hide();
//     sugIndex = -1;
//     sugList = [];
//   }, 100);
// });
$('.viewport').on('click', function () {
  oForecastList.hide();
  sugIndex = -1;
  sugList = [];
});
