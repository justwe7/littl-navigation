<template>
  <header class="container">
    <el-row tag="section" class="header">
      <el-col :span="4"><a class="logo" href="###"></a></el-col>
      <el-col :span="14" class="today">
        <el-col :span="8" class="day">
          <div class="addr">
            <span>
                {{child_addr.addr}}
                <a href="javascript:;" @click="select_addr">[切换]</a>
                 <transition name="slide_addr">
                    <my-address v-show="child_addr.addr_selcet" v-on:_setToParent="_getChild" :addr-data="child_addr"></my-address>
                </transition>
            </span>

            <span></span>
          </div>
          <time class="date">

            <span>{{day}}</span>
            <span>星期日</span>
          </time>
        </el-col>
        <el-col :span="16" tag="ul" class="weather_list">
          <el-col :key="$index" :span="8" tag="li" v-for="(item,$index) in weather">
            <div class="daytime">
               <!-- <b class="icon" :style="`background: url('./${item.cond.code_d}.png') no-repeat center center / 50px`"> -->
              <!--  <b class="icon" :style="`background: url('/static/icons/${item.cond.code_d}.png') no-repeat center center / 50px`">
                </b> -->
                <img class="icon" :src="`/static/icons/${item.cond.code_d}.png`" :alt="item.cond.txt_d">
                <p>
                    <span>{{item.cond.txt_d}}
                        <i v-if="$index === 0" :class="aqiMap[aqi.qlty]">{{aqi.qlty}}</i>
                    </span>
                    <span>{{item.tmp.min}}&nbsp;~&nbsp;{{item.tmp.max}}&#8451;</span>
                </p>
            </div>
            <div class="night">
                <p>夜间：{{item.cond.txt_n}}</p>
                <p>日出：{{item.astro.sr}} 日落：{{item.astro.ss}}</p>
                <p>月出：{{item.astro.mr}} 月落：{{item.astro.ms}}</p>
                <p>风力：{{item.wind.sc}} {{item.wind.dir}}</p>
            </div>
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
            <el-menu-item index="2-1"><a href="https://pan.baidu.com/" target="_blank">百度网盘</a></el-menu-item>
            <el-menu-item index="2-2"><a href="http://mail.163.com/" target="_blank">163邮箱</a></el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  import myAddress from "../header-address/header-address.vue";
  import {formatDate} from '../../common/js/date'; //引入公用的js组件  /* 1.带花括号的输出是 date下的function 可以传入多个function {A,B} 2.不带花括号的输出是export default*/
const ERR_OK = 200;
export default {
  name: 'hello',
  data () {
    return {
        child_addr: {
            addr_selcet: false,
            addr: '北京'
        },
      activeIndex2: '1',
      weather: [],
      aqi: {}
    }
  },
  methods: {
    select_addr() {
        this.child_addr.addr_selcet = true
    },
    _getChild(addr) {//获取子组件数据变化
        console.info(addr)
        this.fetchData(addr);//改变天气数据
    },
    fetchData(addr) {//获取天气数据
        let self = this;
        self.$axios.get(`https://free-api.heweather.com/v5/forecast?city=${addr}&key=1d9500c5813f44a6a7f53128faad45ed`).then((response) => {
                // console.log(response);
                let data = response;
                if (data.status === ERR_OK){
                  self.weather = data.data.HeWeather5[0].daily_forecast;
                }
              });
          self.$axios.get(`https://free-api.heweather.com/v5/aqi?city=${addr}&key=1d9500c5813f44a6a7f53128faad45ed`).then((response) => {
                console.log(response);
                let data = response;
                if (data.status === ERR_OK){
                  self.aqi = data.data.HeWeather5[0].aqi.city;
                    // console.log(self.aqi)
                }
              });
    }
  },
  watch: {

  },
  beforeCreate(){
    let self = this;
        function GetCity() {//通过Promise回调传值
          var promise = new Promise(function(resolve, reject){//实例化城市查询类   通过高德获取位置
            var citysearch = new AMap.CitySearch();//自动获取用户IP，返回当前城市
              citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // console.log(cityinfo)
                    resolve(cityinfo);
                  }
                } else {
                    reject(result.info);
                }
              });
          });
          return promise;
        }

        GetCity().then((addr) => {//高德地图返回的位置信息  》 和风天气获取天气信息
            self.fetchData(addr)
        }, function(warn) {
          console.warn('定位失败', error);
        });
  },
  created(){
    var date = new Date();
    this.day = formatDate(date, 'MM月dd日')
          this.aqiMap = {
            '优': 'Success',
            '良': 'Success',
            '差': 'Warning',
            '不好': 'Danger'
          };
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
        .slide_addr-enter-active{
            transition: all .3s ease;
        }
        .slide_addr-leave-active {
          transition: all .1s;
        }
        .slide_addr-enter, .slide_addr-leave-to{
            transform: translateY(-10px);
            opacity: 0;
        }
      .day {
        display: table;
        .addr {
          width: 100%;
          display: table-row;
          height: 40px;
          span {
            position: relative;
            vertical-align: middle;
            display: table-cell;
            >a{
                font-size: 10px;
            }
            .address{
                position: absolute;
                top: 4px;
                left: 15px;
              }
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
      li{
        overflow: hidden;
        height: 80px;
        cursor: pointer;
        &:hover{
            .daytime{
                top: -80px;
            }
            .night{
                top: -80px;
            }
        }
        .daytime{
            display: table;
            position: relative;
            top: 0;
            transition: 0.4s;
            height: 80px;
            .icon{
                display: table-cell;
                  width: 50px;
                  height: 50px;
            }
            p{
                display: table-cell;
                padding-left: 5px;
                vertical-align: middle;
                text-align: left;
                span{
                    position: relative;
                    padding: 2px 0;
                    display: block;
                    i{
                        position: absolute;
                        top: 0;
                        right: 0px;
                        padding: 1px;
                        font-size: 10px;
                        font-style: normal;
                        color: #fff;
                        &.Success{
                            background-color: $Success;
                        }
                        &.Warning{
                            background-color: $Warning;
                        }
                        &.Danger{
                            background-color: $Danger;
                        }
                      }
                }
            }
        }
        .night{
            position: relative;
            display: table;
            top: 0;
            height: 80px;
            padding: 2px 0;
            transition: 0.3s;
            background-color: $DarkWhite;
            font-size: 12px;
            p{
                display: table-row;
            }
        }
      }
    }
  }
</style>
