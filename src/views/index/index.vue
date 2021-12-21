<script setup lang="ts">
</script>

<template>
  <el-button>Default</el-button>
  <el-button type="primary">Prim2ary</el-button>

  <div class="viewport">
    <div class="g-header">
      <div class="m-main">微 · 导航
        <div id="he-plugin-simple"></div>
      </div>
    </div>
    <!-- <div id="he-plugin-standard"></div> -->
    <section class="g-body">
      <!-- 搜索区域 -->
      <div class="m-search-area">
        <!-- <div class="logo"><img src="./src/img/baidu.png"></div> -->
        <div class="search">
          <div class="search-main">
            <div class="search-input-wrap">
              <input type="text" class="u-key-input" id="key-ipt" autocomplete="off">
            </div>
            <div class="search-btn">
              <button type="submit">嗖一下</button>
            </div>
          </div>
          <ul class="search-forecast" id="forecast"></ul>
        </div>
      </div>
      <!-- 导航区域 -->
      <div class="m-nav-area">
        <!-- 导航 -->
        <ul class="nav-types">
          <li class="cur">综合</li>
          <li>影音</li>
          <li>购物</li>
          <li>社区</li>
          <li>工具</li>
          <li>IT</li>
        </ul>
        <div class="nav-list-box">
          <ul class="nav-block" id="nav_list">
            <li><a target="_blank" href="https://jd.com/">京东</a></li>
            <li><a target="_blank" href="https://tmall.com">天猫</a></li>
            <li><a target="_blank" href="https://www.baidu.com/">百度</a></li>
            <li><a target="_blank" href="https://taobao.com/">淘宝</a></li>
            <li><a target="_blank" href="https://click.union.vip.com/redirect.php?code=JbiZivD">唯品会</a></li>
            <li><a target="_blank" href="https://xiezuocat.com/?s=mnm">秘塔写作猫</a></li>
            <li><a target="_blank" href="https://news.qq.com/">腾讯新闻</a></li>
            <li><a target="_blank" href="https://www.thepaper.cn/">澎湃</a></li>
            <li><a target="_blank" href="https://www.myzaker.com/">ZAKER</a></li>
            <li><a target="_blank" href="https://www.zhihu.com/">知乎</a></li>
            <li><a target="_blank" href="https://www.douban.com/">豆瓣</a></li>
            <li><a target="_blank" href="https://weibo.com/">新浪微博</a></li>
            <li><a target="_blank" href="//www.ctrip.com/?AllianceID=1042641&sid=1700579&ouid=&app=0101F00">携程旅行</a></li>
            <li><a target="_blank" href="https://map.baidu.com/?moulem">百度地图</a></li>
            <li><a target="_blank" href="https://www.58.com/">58同城</a></li>
            <li><a target="_blank" href="https://translate.google.cn/#auto/zh-CN/">谷歌翻译</a></li>
            <li><a target="_blank" href="https://sugs.suning.com/outstation.htm?p=WAdRSgVdA14VGxU4LH5jXUofAEBRRndvMHpbCXVrJXRbSVINYzkoIhwXGxEcGRwbbRdaIhQISRQ8V1UPV1UKFFhTGEJPCEoKWEtSLjo7aUtdHggSCgcmdyY6BwYvNGolDh5JDS4">苏宁易购</a></li>
            <li><a target="_blank" href="https://www.taobao.com/">淘宝网</a></li>
            <li><a target="_blank" href="https://v.qq.com/">腾讯视频</a></li>
            <li><a target="_blank" href="https://www.iqiyi.com/">爱奇艺</a></li>
            <li><a target="_blank" href="https://www.bilibili.com/">Bilibili</a></li>
            <li><a target="_blank" href="https://www.acfun.cn/">AcFun</a></li>
            <li><a target="_blank" href="https://www.douyu.com/">斗鱼</a></li>
            <li><a target="_blank" href="https://music.163.com/">网易云音乐</a></li>
          </ul>
        </div>
      </div>
      <!-- 工具箱 -->
      <div class="m-tools">
       <!--  <form>
          <div class="form-group">
            <label for="url">短链地址</label>
            <input type="sURL" class="form-control" id="url" aria-describedby="sURLHelp">
            <small id="sURLHelp" class="form-text text-muted">有效期3天</small>
          </div>
          <button type="submit" class="btn btn-primary shortlink_hook">生成</button>
        </form> -->
        <ul class="f-clearfix">
          <li><a href="/slink.html">短链生成器</a></li>
          <li><a href="/ddwz.html">文字颠倒工具</a></li>
          <li><a href="tool_hw.html">花样文字生成</a></li>
          <li><a href="/rebot.html">智能机器人</a></li>
          <!-- <li><a href="tool_tz">个性昵称生成</a></li> -->
          <!-- <li><a href="">二维码生成器</a></li> -->
          <li><a href="tool_tts">语音二维码</a></li>
          <li><a href="tool_syw">小号英文字母生成</a></li>
          <li><a href="tool_spwz">竖排文字工具</a></li>
          <li><a href="tool_sj">随机抽取</a></li>
          <li><a href="tool_qr">二维码生成</a></li>
          <li><a href="tool_jjzt">尖叫字体</a></li>
          <li><a href="tool_jf">北京小汽车摇号推算</a></li>
          <li><a href="tool_hz">好玩汉字昵称生成</a></li>
          <li><a href="tool_bz">快速复制工具</a></li>
          <li><a href="tool_ywz">朋友圈直升机生成</a></li>
          <li><a href="tool_wxday">历史天数转换日期</a></li>
          <li><a href="tool_tz">个性符号生成</a></li>
          <li><a href="tool_cbnc">翅膀文字生成</a></li>
          <li><a href="tool_jmImg">图片加密解密工具</a></li>
        </ul>
      </div>
    </section>
    <footer class="g-footer">&copy;littl.cn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2021001641号</a></footer>
  </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>
