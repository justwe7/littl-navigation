<template>
  <header class="container">
    <el-row tag="section" class="header">
      <el-col :span="4"><a class="logo" href="###"></a></el-col>
      <el-col :span="14" class="today">
        <el-col :span="8" class="day">
          <span class="addr">
            <span>北京</span>
            <span>
              <a href="###">切换</a>
              <!--<my-address></my-address>-->
            </span>
          </span>
          <time class="date">
            <span>2017年12月7日</span>
            <span>星期日</span>
          </time>
        </el-col>
        <el-col :span="14" tag="ul" class="weather_list">
          <el-col :key="$index" :span="8" tag="li" v-for="(item,$index) in weather">
            {{item.cond.txt_d}}
            <img src="https://cdn.heweather.com/cond_icon/100.png" alt="">
            <!--{{item.cond.code_d}}https://cdn.heweather.com/cond_icon/100.png-->
          </el-col>
          <!--<el-col :span="8" tag="li">晴天</el-col>-->
          <!--<el-col :span="8" tag="li">晴天</el-col>-->
          <!--<el-col :span="8" tag="li">晴天</el-col>-->
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-menu :default-active="activeIndex2" class="fr" mode="horizontal">
          <el-menu-item index="1">快捷工具</el-menu-item>
          <el-submenu index="2">
            <template slot="title">快捷入口</template>
            <el-menu-item index="2-1">网盘</el-menu-item>
            <el-menu-item index="2-2">163邮箱</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  import myAddress from "../header-address/header-address.vue";
const ERR_OK = 200;
export default {
  name: 'hello',
  data () {
    return {
      activeIndex2: '1',
      weather: []
    }
  },
  methods: {

  },
  beforeCreate(){

    let self = this;
    let GetCity = new Promise(function(resolve, reject){//设置异步
      setTimeout(resolve, 0);
    });
    GetCity.then(function(){//先通过高德获取位置
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
    }).then(function(ev){//和风天气获取天气信息
      self.$axios.get('https://free-api.heweather.com/v5/forecast?city=东城区&key=1d9500c5813f44a6a7f53128faad45ed').then((response) => {
        console.log(response);
        let data = response;
        if (data.status === ERR_OK){
          self.weather = data.data.HeWeather5[0].daily_forecast;
        }
      });
    });
//    self.$axios.get('https://webapi.amap.com/maps?v=1.3&key=7d148b3a3e9657bf10a067f5d77a5254&plugin=AMap.CitySearch').then((response) => {
//      console.log(response);
//    });
    /*self.$axios.get('https://free-api.heweather.com/v5/forecast?city=%E5%8C%97%E4%BA%AC&key=1d9500c5813f44a6a7f53128faad45ed').then((response) => {
        console.log(response);
        let data = response;
        if (data.status === ERR_OK){
          self.weather = data.data.HeWeather5[0].daily_forecast;
          console.log(data.data.HeWeather5);
        }
    });*/
  },
  components: {
    myAddress
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";
  .container {
    background-color: $DarkWhite;
    .header {
      width: 1200px;
      height: 80px;
      @extend %centerblock;
      .el-menu {
        background-color: inherit;
      }
    }
    .logo {
      display: block;
      width: 200px;
      height: 84px;
      background: url("./images.png") no-repeat center;
    }
    .today {
      .day {
        display: table;
        .addr {
          width: 100%;
          display: table-row;
          height: 40px;
          span {
            vertical-align: middle;
            display: table-cell;
          }
        }
        .date {
          width: 100%;
          display: table-row;
          height: 40px;
          span {
            vertical-align: middle;
            display: table-cell;
          }
        }
      }
    }
    .weather_list{
      display: table;
      li{
        display: table-cell;
        height: 80px;
        img{
          width: 50px;
        }
      }
    }
  }
</style>
