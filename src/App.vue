<template>
  <div id="app">
    <my-header></my-header>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/header/header.vue'
export default {
  name: 'app',
  components: {
    myHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
