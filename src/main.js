import Vue from 'vue';
import App from './App';
import router from './router'
import './axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
// https://free-api.heweather.com/v5/forecast?city=%E5%8C%97%E4%BA%AC&key=1d9500c5813f44a6a7f53128faad45ed
Vue.config.productionTip = false;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
