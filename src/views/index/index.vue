<template>
  <el-container>
    <!-- <el-aside width="200px" class="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">222</el-aside> -->
    <el-main class="bg-stone-100 dark:bg-gray-900 h-screen bg-no-repeat bg-fixed bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png')]">
      <div class="md:pt-20">
        <Search></Search>
        <TabNav></TabNav>

      </div>
    </el-main>
    <!-- <el-footer>
    &copy;littl.cn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2021001641号</a>
    </el-footer> -->
</el-container>
  
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Search from './components/search.vue'
import TabNav from './components/navs-tab.vue'

export default defineComponent({
  components: {
    Search,
    TabNav
  },
  setup() {
   
  },
  methods: {},
})
</script>
