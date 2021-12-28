<template>
  <el-tabs class="w-3/4 m-auto mt-20" v-model="current">
    <el-tab-pane :label="item.text" :name="item.type" v-for="item in tabData">
      <div class="h-52 grid grid-rows-4 grid-flow-col gap-4">
        <a class="leading-loose text-center hover:underline hover:text-cyan-800 bg-neutral-100 rounded-md" :href="site.url" target="_blank" v-for="site in item.children">{{ site.name }}</a>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script type="text/ecmascript-6" lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

type NavItem = {
  name: string;
  icon?: string;
  url: string;
}

type SearchWord = {
  value: string;
  url: string
}


const tabData = [
  {
    text: '综合',
    type: '0',
    children: [
      {
        name: '京东',
        url: 'https://jd.com/'
      },
      {
        name: '天猫',
        url: 'https://tmall.com'
      },
      {
        name: '百度',
        url: 'https://www.baidu.com/'
      },
      {
        name: '淘宝',
        url: 'https://taobao.com/'
      },
      {
        name: '唯品会',
        url: 'https://click.union.vip.com/redirect.php?code=JbiZivD'
      },
      {
        name: '秘塔写作猫',
        url: 'https://xiezuocat.com/?s=mnm'
      },
      {
        name: '腾讯新闻',
        url: 'https://news.qq.com/'
      },
      {
        name: '澎湃',
        url: 'https://www.thepaper.cn/'
      },
      {
        name: 'ZAKER',
        url: 'https://www.myzaker.com/'
      },
      {
        name: '知乎',
        url: 'https://www.zhihu.com/'
      },
      {
        name: '豆瓣',
        url: 'https://www.douban.com/'
      },
      {
        name: '新浪微博',
        url: 'https://weibo.com/'
      },
      {
        name: '携程旅行',
        url: '//www.ctrip.com/?AllianceID=1042641&sid=1700579&ouid=&app=0101F00'
      },
      {
        name: '百度地图',
        url: 'https://map.baidu.com/?moulem'
      },
      {
        name: '58同城',
        url: 'https://www.58.com/'
      },
      {
        name: '谷歌翻译',
        url: 'https://translate.google.cn/#auto/zh-CN/'
      },
      {
        name: '苏宁易购',
        url: 'https://sugs.suning.com/outstation.htm?p=WAdRSgVdA14VGxU4LH5jXUofAEBRRndvMHpbCXVrJXRbSVINYzkoIhwXGxEcGRwbbRdaIhQISRQ8V1UPV1UKFFhTGEJPCEoKWEtSLjo7aUtdHggSCgcmdyY6BwYvNGolDh5JDS4'
      },
      {
        name: '淘宝网',
        url: 'https://www.taobao.com/'
      },
      {
        name: '腾讯视频',
        url: 'https://v.qq.com/'
      },
      {
        name: '爱奇艺',
        url: 'https://www.iqiyi.com/'
      },
      {
        name: 'Bilibili',
        url: 'https://www.bilibili.com/'
      },
      {
        name: 'AcFun',
        url: 'https://www.acfun.cn/'
      },
      {
        name: '斗鱼',
        url: 'https://www.douyu.com/'
      },
      {
        name: '网易云音乐',
        url: 'https://music.163.com/'
      },
    ]
  },
  {
    text: '影音',
    type: '1',
    children: [
      {
        name: '京东',
        url: 'https://jd.com/'
      }
    ]
  },
  {
    text: '购物',
    type: '2',
    children: [
      {
        name: '京东',
        url: 'https://jd.com/'
      }
    ]
  },
  {
    text: '影音',
    type: '3',
    children: [
      {
        name: '京东',
        url: 'https://jd.com/'
      }
    ]
  },
  {
    text: '社区',
    type: '4',
    children: [
      {
        name: '京东',
        url: 'https://jd.com/'
      }
    ]
  }
]

export default defineComponent({
  components: {},
  setup() {
    return {
      current: '0',
      tabData
      // activeName: '综合',
    }
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event)
    // },
  },
})
</script>
<style>
.el-tabs__header {
  text-align: center;
}
.el-tabs__nav-wrap {
  display: inline-block;
}
.el-tabs__nav-wrap::after {
  display: none;
}
</style>
