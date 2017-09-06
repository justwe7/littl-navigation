import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

require('../common/css/reset.css');//全局引入css reset

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

showCityInfo()
//获取用户所在城市信息
function showCityInfo() {
    //实例化城市查询类
    var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
                var cityinfo = result.city;
                var citybounds = result.bounds;
                // document.getElementById('tip').innerHTML = '您当前所在城市：'+cityinfo;
                console.log(cityinfo)
                //地图显示当前城市
                // map.setBounds(citybounds);
            }
        } else {
            // document.getElementById('tip').innerHTML = result.info;
                console.log(result.info)
        }
    });
}