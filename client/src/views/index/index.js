import './index.scss';
import '../../lib/jq-extend';
// import './js/index';
import './search';

const oNavListWrapper = $('#nav_list');
let navList = {};
$.ajax({
  type: 'get',
  url: 'http://localhost:7778/v1/nav/list',
  success: function (response) {
    navList = response.data.reduce((result, target) => {
      // if (result[target.type] === undefined) {
      // }
      result[target.type] === undefined && (result[target.type] = []);
      result[target.type].push(target);
      //   result[target.type].push(target);
      return result;
    }, {});
    renderList(navList[0]);
  }
});

function renderList (arr) {
  let str = '';
  arr.forEach(item => {
    str += `<li><a target="_blank" href="${item.url}">${item.name}</a></li>`;
  });
  oNavListWrapper.html(str);
}

$('.nav-types li').hover(function () {
  $('.nav-types li').removeClass('cur');
  $(this).addClass('cur');
  renderList(navList[$('.nav-types li').index(this)]);
});

// if (module.hot) {
//   module.hot.accept('./main.js', function () {
//     console.log('Accepting the updated printMe module!');
//   });
//   // 关闭指定子模块的HMR
//   // module.hot.decline('./extra.js')
// }
