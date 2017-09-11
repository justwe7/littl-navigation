<template>
  <div class="address">
    <el-cascader
      expand-trigger="hover"
      :options="options"
      :show-all-levels="false"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script type="text/ecmascript-6">
import addr from "./addr.js";//地区联动信息
export default {
  data () {
    return {
      options: addr,
      selectedOptions: ['北京市','北京市','东城区']
    }
  },
  props: {
    addrData: {
      type: Object
    }
  },
  methods: {
    handleChange(value) {//传递位置信息到父组件
      this.addrData.addr = value[value.length-1];
      this.addrData.addr_selcet = false;
      this.$emit('_setToParent',this.addrData.addr);
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.address{
  width:100px;
}
</style>
