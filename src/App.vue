<template>
  <div id="app">
    <my-header></my-header>
    <my-search></my-search>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/header/header.vue'
import mySearch from './components/search/search.vue'
export default {
  name: 'app',
  components: {
    myHeader,mySearch
  }
}
</script>

<style>

</style>
