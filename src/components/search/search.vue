<template>
  <section class="search_wrapper">
    <el-row tag="div" class="main">
      <!--<el-col :span="4" class="search_icon"></el-col>-->
      <el-col :span="20">
        <el-form style="margin-top: 15px;" :inline="true" :model="formInline" class="search_box">
          <el-form-item label="" class="search_input">
            <el-autocomplete
              placeholder="西西弗斯"
              icon="search"
              :fetch-suggestions="querySearchAsync"
              v-model="formInline.user"
              @select="handleSelect"
              :on-icon-click="handleIconClick">
              <el-select v-model="formInline.region" slot="prepend" placeholder="" class="search_engine">
                <el-option label="谷歌" value="google"></el-option>
                <el-option label="百度" value="baidu"></el-option>
                <el-option label="必应" value="bing"></el-option>
                <el-option label="搜狗" value="Sogou"></el-option>
                <el-option label="好搜" value="360"></el-option>
                <el-option label="GitHub" value="GitHub"></el-option>
                <el-option label="StackOverflow" value="StackOverflow"></el-option>
              </el-select>
            </el-autocomplete>
          </el-form-item>
        </el-form>
      </el-col>

    </el-row>
  </section>
</template>

<script type="text/ecmascript-6">
import ElCol from "element-ui/packages/col/src/col";

export default {
  components: {ElCol},
  data() {
    return {
      formInline: {
        name: '',
        region: '',
        user: '',
        region: ''
      }
    }
  },
  methods: {
    handleIconClick() {
      alert(1);
    },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" >
  @import "../../common/sass/mixin";
.search_wrapper{
  height: 80px;
  .main{
    padding-top: 30px;
    width: 990px;
    @extend %centerblock;
  }
  .search_icon{
    height: 50px;
    background-color: $LightBlue;
  }
  .search_box{
    position: relative;
    padding-left: 20px;
    .search_engine{//选择搜索引擎
      width: 100px;
      .el-input{
        .el-input__inner{
          text-indent: 0.5em;
        }
      }
    }
    .search_input { //搜索框样式
      width: 500px;
      .el-form-item__content {
        position: relative;
        width: 100%;
        display: block;
        .el-autocomplete{
          display: block;
        }
      }

      .el-input__inner {
        width: 100%;
        height: 44px;
        font-size: 15px;
      }
    }
  }
}

</style>
