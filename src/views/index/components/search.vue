<template>
  <el-row :gutter="0" class="w-full md:w-2/3 m-auto">
    <el-col :span="20">
      <el-autocomplete
        v-model="wd"
        class="w-full"
        clearable
        :trigger-on-focus="false"
        :fetch-suggestions="querySearchAsync"
        placeholder="输入关键词"
        select-when-unmatched
        @select="handleCheckWords"
      />
    </el-col>
    <el-col :span="4">
      <el-dropdown split-button type="primary" @click="handleClick" @command="handleChangeTarget">
        {{ searchEngine.buttonText }}
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :command="item" v-for="item in searchEngineList">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown></el-col>
  </el-row>
</template>
<script type="text/ecmascript-6" lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import associationalWords from './associationalWords';

type SearchEngineItem = {
  name: string;
  icon?: string;
  url: string;
  buttonText: string;
}

type SearchWord = {
  value: string;
  url: string
}


const searchEngineList: SearchEngineItem[] = [
  {
    name: '百度',
    url: 'https://www.baidu.com/s?wd=$w$',
    buttonText: '百度一下',
  },
  {
    name: 'Google',
    url: 'https://www.google.com/search?wd=$w$',
    buttonText: 'Google',
  },
  {
    name: '谷歌中译英',
    url: 'https://translate.google.com/?hl=zh-CN&sl=zh-CN&tl=en&op=translate&text=$w$',
    buttonText: '翻译为英文',
  },
  {
    name: '谷歌英译中',
    url: 'https://translate.google.com/?sl=en&tl=zh-CN&op=translate&hl=zh-CN&text=$w$',
    buttonText: '翻译为中文',
  },
  {
    name: '智能翻译',
    url: 'https://fanyi.baidu.com/translate?lang=auto2zh&query=$w$',
    buttonText: '百度翻译',
  }
]

export default defineComponent({
  components: {},
  setup() {
    const searchEngine: SearchEngineItem = searchEngineList[0]

    const associationalWordsList = ref([])
    const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
      // console.log((queryString), 111)
      associationalWords(queryString).then(res => {
        console.log(res)
        cb((res as []).map(v => {
          return {
            value: v,
            url: v
          }
        }))
      })
      // const results = queryString
      //   ? links.value.filter(createFilter(queryString))
      //   : links.value

      // clearTimeout(timeout)
      // timeout = setTimeout(() => {
      //   console.log(results)
      //   cb(results)
      // }, 3000 * Math.random())
    }
    /* const createFilter = (queryString: string) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    } */
    onMounted(() => {
      // links.value = loadAll()
      // console.log(loadAll())
    })
    return {
      searchEngine,
      searchEngineList,
      // associationalWordsList,
      wd: ref(''),
      querySearchAsync,
      // createFilter,
      // loadAll,
      // handleSelect,
    }
  },
  methods: {
    handleCheckWords (item: SearchWord) {
      window.open(this.searchEngine.url.replace('$w$', item.value))
    },
    handleClick () {
      window.open(this.searchEngine.url.replace('$w$', this.wd))
    },
    handleChangeTarget (item: SearchEngineItem) {
      console.log(item.name)
      this.searchEngine = item
    }
  },
})
</script>
<style>
.el-dropdown__caret-button {
  margin-left: 0 !important;
}
.el-button-group {
  padding-left: 5px;
}
.el-button-group>.el-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 10rem;
}
.el-button-group>.el-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>