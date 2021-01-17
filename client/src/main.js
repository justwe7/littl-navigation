import './css/style.scss';
import './js/index';

const oInput = $('#key-ipt');
const oForecastList = $('#forecast');

function debounce (fn, interval = 300) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}

oInput.on('input', debounce(function (e) {
  if (oInput.val().trim().length) {
    oForecastList.show();
  } else {
    oForecastList.hide();
  }
  console.log(oInput.val());
}));
oInput.on('blur', function (e) {
  oForecastList.hide();
});
