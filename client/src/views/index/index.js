import './index.scss';
import '../../lib/jq-extend';
// import './js/index';
import './search';

/*
[
    "京东###https://union-click.jd.com/jdc?e=0&p=AyIPZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkFa3UDE08WfTJTYm0AVR0HEQRbGR5YMnUOHmlWGlscAhIGVxtaJQIRBFEaWR0DEwFlG1oUAxYBVx1bFjIiB1QrEHsDIgdRGVMdChQGUR5rFQYXB1YbWBIBFAZTGWsSMklSOx9TF1YUDwFPWUVRFFNlK2slMiIHVStbJV1WWgg%3D&t=W1dCFFlQCxxUQRMEAEAdQFkJBQ%3D%3D",
    "天猫###https://s.click.taobao.com/t?e=m%3D2%26s%3DwkpKbFNu530cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMf5O%2Fs5NflXL8sviUM61dt1F5kNUE%2F%2F7IvMYWoE3zmVnZfi7HkUvSN4LwNDf1rpeZI4nZdlWtg%2FJuH1hWG3%2BVYTlSg55GVX5wQOpQ6SW%2BTjesd%2B%2Ff4Fhw9Ypqc3O%2F4tafZwIqRHwxvj3nDWCSR8SND%2BiZ%2BQMlGz6FQ%3D%3D",
    "柠檬好券###https://www.somelemon.com/",
    "淘宝###https://ai.taobao.com/?pid=mm_131955459_43834449_448012653",
    "唯品会###https://click.union.vip.com/redirect.php?code=JbiZivD",
    "秘塔写作猫###https://xiezuocat.com/?s=mnm",
    "网易###http://www.163.com/",
    "淘宝网###https://www.taobao.com/",
    "中->英###https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en",
    "英->中###https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=",
    "腾讯新闻###https://news.qq.com/",
    "ZAKER###http://www.myzaker.com/",
    "携程旅行###//www.ctrip.com/?AllianceID=1042641&sid=1700579&ouid=&app=0101F00",
    "知乎###https://www.zhihu.com/",
    "豆瓣###https://www.douban.com/",
    "新浪微博###https://weibo.com/",
    "百度地图###http://map.baidu.com/?moulem",
    "苏宁易购###https://sugs.suning.com/outstation.htm?p=WAdRSgVdA14VGxU4LH5jXUofAEBRRndvMHpbCXVrJXRbSVINYzkoIhwXGxEcGRwbbRdaIhQISRQ8V1UPV1UKFFhTGEJPCEoKWEtSLjo7aUtdHggSCgcmdyY6BwYvNGolDh5JDS4",
    "腾讯视频###https://v.qq.com/",
    "爱奇艺###https://www.iqiyi.com/",
    "Bilibili###https://www.bilibili.com/",
    "AcFun###http://www.acfun.cn/",
    "斗鱼###https://www.douyu.com/",
    "网易云音乐###https://music.163.com/"
]

[
    "站酷###http://www.zcool.com.cn/",
    "Behance###https://www.behance.net/",
    "花瓣###http://huaban.com/",
    "Dribbble###https://dribbble.com/",
    "Pinterest###https://www.pinterest.com/",
    "Iconfont###https://www.iconfont.cn/",
    "Pixabay###https://pixabay.com/",
    "Freeimages###https://cn.freeimages.com/?fr=moulem.com",
    "500px###https://500px.com/",
    "千图网###http://www.58pic.com/",
    "昵图网###http://www.nipic.com/",
    "优设网###http://www.uisdc.com/",
    "Github###https://github.com/",
    "Stack Ove...###https://stackoverflow.com/",
    "CSDN###https://www.csdn.net/",
    "W3C School###http://www.w3school.com.cn/",
    "Reddit###https://www.reddit.com/",
    "V2EX###https://www.v2ex.com/",
    "InfoQ###http://www.infoq.com/cn",
    "Leetcode###https://leetcode-cn.com//",
    "阿里云###https://www.aliyun.com/?source=5176.11533457&userCode=z3tvbsdt&type=copy",
    "腾讯云###https://cloud.tencent.com/",
    "站长之家###http://www.chinaz.com/",
    "百度指数###http://index.baidu.com/"
]

[
    "淘宝网###https://www.taobao.com/",
    "京东###https://union-click.jd.com/jdc?e=0&p=AyIPZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkFa3UDE08WfTJTYm0AVR0HEQRbGR5YMnUOHmlWGlscAhIGVxtaJQIRBFEaWR0DEwFlG1oUAxYBVx1bFjIiB1QrEHsDIgdRGVMdChQGUR5rFQYXB1YbWBIBFAZTGWsSMklSOx9TF1YUDwFPWUVRFFNlK2slMiIHVStbJV1WWgg%3D&t=W1dCFFlQCxxUQRMEAEAdQFkJBQ%3D%3D",
    "苏宁电器###https://sugs.suning.com/outstation.htm?p=WAdRSgVdA14VGxU4LH5jXUofAEBRRndvMHpbCXVrJXRbSVINYzkoIhwXGxEcGRwbbRdaIhQISRQ8V1UPV1UKFFhTGEJPCEoKWEtSLjo7aUtdHggSCgcmdyY6BwYvNGolDh5JDS4",
    "亚马逊###https://amazon.cn/?&_encoding=UTF8&tag=moulem2-23&linkCode=ur2&linkId=dea4ec591f565e8f709f89ace4c722b4&camp=536&creative=3200",
    "网易考拉###https://c.duomai.com/track.php?k=WYrVWe19Gaz1DZpVXZmczM3ETPklWYmkjM4ATNy0DZp9VZ0l2cmYiJGJTJt92YuEGbvF2auc3d3ZkMlYkMlE0MlAHd0hWP0ZSYs9",
    "网易严选###https://c.duomai.com/track.php?k=19Gaz1DZpVXZmcDOwMTPklWYmkjM4ATNy0DZp9VZ0l2cmYkMl02bj5yM2EjL19WeGJTJGJTJBNTJwRHdo1DdmUWe",
    "亚马逊国际###https://www.amazon.com/",
    "天猫商城###https://s.click.taobao.com/t?e=m%3D2%26s%3DwkpKbFNu530cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMf5O%2Fs5NflXL8sviUM61dt1F5kNUE%2F%2F7IvMYWoE3zmVnZfi7HkUvSN4LwNDf1rpeZI4nZdlWtg%2FJuH1hWG3%2BVYTlSg55GVX5wQOpQ6SW%2BTjesd%2B%2Ff4Fhw9Ypqc3O%2F4tafZwIqRHwxvj3nDWCSR8SND%2BiZ%2BQMlGz6FQ%3D%3D",
    "柠檬好券###http://www.somelemon.com/",
    "爱淘宝###https://ai.taobao.com/?pid=mm_131955459_43834449_448012653",
    "天猫超市###https://s.click.taobao.com/t?e=m%3D2%26s%3DtUGIiU%2BsdnAcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMSQWbpNayCQvlovu%2FCElQOtF5kNUE%2F%2F7IvMYWoE3zmVn%2FvhKhL7CQ0F007j44kamWcs%2Fhc73tO6KVYo%2BqyT%2FBa1NrKwvDJNPXkIGbLNY5ut4zueC0P1cNS8SEr1EsGrIAyErXoWiLD6UFveQ9Ld2jopdow9d%2FMD%2BXQ%3D%3D",
    "拼多多###https://youhui.pinduoduo.com/?pid=9156499_111416820&fromCustomerMall=1&cpsSign=CM_190916_9156499_111416820_270b453e220832d890c06aeb2d1d99a2&duoduo_type=2",
    "唯品会###https://click.union.vip.com/redirect.php?code=JbiZivD",
    "某柠檬省购###http://sheng.moulem.com/",
    "当当###http://union.dangdang.com/transfer.php?from=P-337676&ad_type=10&sys_id=1&backurl=http%3A%2F%2Fwww.dangdang.com%2F",
    "国美###https://c.duomai.com/track.php?k=WbvdWZ5V3boNXPklWdlZiNzITPklWYmkjM4ATNy0DZp9VZ0l2cmYiJGJTJuNmLt92YuUWbvdmL3d3dGJTJGJTJBNTJwRHdo1DdmU",
    "1688###https://www.1688.com/",
    "聚美优品###https://jumei.com",
    "闲鱼###https://2.taobao.com/",
    "凡客诚品###http://www.vancl.com/",
    "聚划算###https://s.click.taobao.com/t?e=m%3D2%26s%3DBHY9CRLxUYccQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAq1bnWHBmyIx0euDHY%2FMl0x8VnVCsm%2B7V%2FVezbbQauanh01SrfCIGrxj5lVEIli2nQune%2BSK2%2FEQFbpSCl1%2BmsLkxFiXT%2FI5kYaDjw%2FF04D8O0MJq4IL1XsaHks2%2FfPFu3EqY%2Bakgpmw",
    "淘抢购###https://s.click.taobao.com/t?e=m%3D2%26s%3D8DaIikY7S90cQipKwQzePCperVdZeJvi7UTzUAW%2BpR4YX8TY%2BNEwd7bov1IkrCC7J7ATJSEv968XySjj5GL6iWtk38Vu4lpU4YOJfB23IYcNbSu4PSrsmWgUxK1tmH2TltYSbANjspZW2XebP8pjNJvwqvPhqSBIjPobR%2B9Wl%2BowiSpZEu%2FXvv03UMkjQyxoI%2BVo4ZbOXiR05tv3uQ%2FjRe8iRa8%2BPWh%2BwXfojAoKVow%3D",
    "一淘###https://www.etao.com/",
    "蘑菇街###https://www.mogu.com/"
]

[
    "新浪微博###https://weibo.com/",
    "腾讯微博###http://t.qq.com/",
    "豆瓣###https://www.douban.com/",
    "知乎###https://www.zhihu.com/",
    "Linked In###https://www.linkedin.com/",
    "V2EX###https://www.v2ex.com/",
    "Bilibili###https://www.bilibili.com/",
    "AcFun###http://www.acfun.cn/",
    "腾讯动漫###http://ac.qq.com/",
    "快看漫画###https://www.kuaikanmanhua.com/",
    "糗事百科###https://www.qiushibaike.com/",
    "煎蛋###http://jandan.net/",
    "百度贴吧###https://tieba.baidu.com/index.html",
    "天涯###http://www.tianya.cn/",
    "人人###http://www.renren.com/",
    "猫扑###http://www.mop.com/",
    "果壳###https://www.guokr.com/",
    "简书###https://www.jianshu.com/",
    "站酷###http://www.zcool.com.cn/",
    "网页微信###https://wx.qq.com/",
    "LOFTER###http://www.lofter.com/?fr=moulem.com",
    "虎扑体育###https://bbs.hupu.com/",
    "百合网###http://www.baihe.com",
    "QQ空间###https://qzone.qq.com/"
]

[
    "腾讯视频###https://v.qq.com/",
    "爱奇艺###https://www.iqiyi.com/",
    "优酷###http://www.youku.com/",
    "搜狐视频###https://tv.sohu.com/",
    "乐视视频###http://www.le.com/",
    "芒果TV###https://www.mgtv.com/",
    "斗鱼###https://www.douyu.com/",
    "虎牙###http://www.huya.com/",
    "YY直播###http://www.yy.com/",
    "龙珠直播###http://www.longzhu.com/",
    "Bilibili###https://www.bilibili.com/",
    "AcFun###http://www.acfun.cn/",
    "网易云音乐###https://music.163.com/",
    "QQ音乐###https://y.qq.com/",
    "酷狗###http://www.kugou.com/",
    "虾米###http://www.xiami.com/",
    "音悦Tai###http://www.yinyuetai.com/",
    "喜马拉雅FM###http://www.ximalaya.com",
    "Neets影视###https://neets.cc/",
    "低端影视###https://ddrk.me/",
    "电影天堂###http://www.dytt8.net/",
    "怡萱动漫###http://www.yxdm.me/",
    "神马影视###http://www.9rsm.com/",
    "网盘搜索###http://www.daihema.com/"
]


[
    "百度地图###http://map.baidu.com/?moulem",
    "谷歌地图###http://www.google.cn/maps",
    "高德地图###https://www.amap.com/",
    "百度翻译###http://fanyi.baidu.com/",
    "有道翻译###http://fanyi.youdao.com/",
    "谷歌翻译###https://translate.google.cn/#auto/zh-CN/",
    "天气###https://www.baidu.com/s?wd=天气",
    "计算器###https://www.baidu.com/s?wd=计算器",
    "果核破解###https://www.ghpym.com/",
    "500彩票###http://www.500.com/",
    "12306###https://kyfw.12306.cn/otn/index/init",
    "百度云###https://pan.baidu.com/",
    "百度脑图###http://naotu.baidu.com/home",
    "程序员工具###https://tool.lu/?fr=moulem.com",
    "草料二维码###https://cli.im/",
    "在线识曲###https://www.midomi.com/?fr=moulem.com",
    "企查查###http://www.qichacha.com/",
    "天眼查###https://www.tianyancha.com/",
    "QQ邮箱###https://mail.qq.com/",
    "163/126邮箱###http://email2.163.com/",
    "格式转换###https://cn.office-converter.com/",
    "单位换算###https://www.baidu.com/s?wd=单位换算",
    "网盘搜索###http://www.panduoduo.net/?fr=moulem.com",
    "磁力搜索###http://www.cilimao.me/?fr=moulem.com"
]

*/

// if (module.hot) {
//   module.hot.accept('./main.js', function () {
//     console.log('Accepting the updated printMe module!');
//   });
//   // 关闭指定子模块的HMR
//   // module.hot.decline('./extra.js')
// }
