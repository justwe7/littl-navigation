<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '头部'
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.header{
  background-color: red;
}
</style>
