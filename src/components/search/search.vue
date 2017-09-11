<template>
  <section class="search_wrapper">
    <el-row tag="div" class="main">
      <el-col :span="4" class="search_icon"></el-col>
      <el-col :span="20">
        <el-form :inline="true" :model="formInline" class="search_box">
          <el-select v-model="formInline.region" placeholder="" class="search_engine">
            <el-option label="谷歌" value="google"></el-option>
            <el-option label="百度" value="baidu"></el-option>
            <el-option label="必应" value="baidu"></el-option>
            <el-option label="搜狗" value="baidu"></el-option>
            <el-option label="好搜" value="baidu"></el-option>
            <el-option label="GitHub" value="baidu"></el-option>
            <el-option label="StackOverflow" value="baidu"></el-option>
          </el-select>
          <el-form-item label="" class="search_input">
            <el-input v-model="formInline.user" placeholder="搜索" class=""></el-input>
            <i class="el-icon-circle-close clear_from"></i>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="search">搜索</el-button>
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
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" >
  @import "../../common/sass/mixin";
.search_wrapper{
  height: 80px;
  .main{
    padding-top: 30px;
    width: 880px;
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
      position: absolute;
      left: 22px;
      top: 2px;
      width: 13px;
      z-index: 1;
      .el-input__icon{
        left: 2px;
      }
      input{
        border: none;
        background: transparent;
      }
    }
    .search_input{//搜索框样式
      width: 500px;
      .el-form-item__content{
        position: relative;
        width: 100%;
        .clear_from{
          position: absolute;
          cursor: pointer;
          color: $Silver;
          top: 16px;
          bottom: 0;
          right: 7px;
        }
      }
      .el-input__inner{
        width: 100%;
        height: 44px;
        text-indent: 2.5em;
        font-size: 15px;
      }
    }
    .el-form-item{//搜索按钮
      height: 44px;
      .el-button{
        width: 100px;
        height: 44px;
      }
    }
  }
}

</style>
