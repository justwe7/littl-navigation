import './css/style.scss';
import './lib/jq-extend';
import { debounce } from './lib/utils';
import './js/index';

// if (module.hot) {
//   module.hot.accept('./main.js', function () {
//     console.log('Accepting the updated printMe module!');
//   });
//   // 关闭指定子模块的HMR
//   // module.hot.decline('./extra.js')
// }

const oInput = $('#key-ipt');
const oForecastList = $('#forecast');

/* 联想 */
function suggestList (event, words) {
  if (event.which !== 39 && event.which !== 40 && event.which !== 37 && event.which !== 38 && event.which !== 13) {
    if (!words) {
      oForecastList.hide();
      return false;
    }
    $.jsonp2(words).then(list => {
      // console.log(list);
      let listHtmls = '';
      list.forEach(v => {
        listHtmls += `<li>${v}</li>`;
      });
      oForecastList.html(listHtmls);
      oForecastList.show();
    });
  }
}

oInput.on('input', debounce(function (e) {
  suggestList(e, $.trim(oInput.val()));
}));
oInput.on('blur', function (e) {
  oForecastList.hide();
});
