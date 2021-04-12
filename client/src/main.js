import './css/style.scss';
import './lib/jq-extend';
import './js/index';
import './js/search';

$('.shortlink_hook').on('click', function (e) {
  e.preventDefault();
  $.ajax({
    url: 'https://t.littl.cn/api/gen',
    // url: 'http://localhost:7778/api/gen',
    type: 'post',
    data: { url: $('#url').val().trim() },
    success: function (response) {
      alert(JSON.stringify(response));
      console.log(response);
    }
  });
});

// if (module.hot) {
//   module.hot.accept('./main.js', function () {
//     console.log('Accepting the updated printMe module!');
//   });
//   // 关闭指定子模块的HMR
//   // module.hot.decline('./extra.js')
// }
