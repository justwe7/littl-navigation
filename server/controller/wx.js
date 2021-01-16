// const { Wechat } = require('wechat-jssdk');
// var WechatAPI = require('co-wechat-api');
const wechatSdk = require('../../lib/wxsdk')
const { v4: uuidv4 } = require('uuid');
const sha1 = require('sha1');
const URI = require('urijs');
const wx = new wechatSdk()

const TOKEN = 'justwe7'

const testAppid = 'wx3243067fdf4d7a2e'
const testSecret = '139b4edf6460fe527e63a9b2e8839941'

// const toekn = '40_v5uc85j6EQvPocJZgXpFtZTyIgrOtrboYE4WMXE5P9kiWa7O6R7V7BuSmajJHnQaelYQ-CEn-60ImXbHw1iZsXL-ST0MnYDLgrgSAWV2CDuUGBwbjLOaGVquE0o1e88gRMw8DhOS-J-QgbSgQGOdAIALBJ'
// 获取accesstoken必须在公众号后台配置服务器的公网ip
const wxconfig = async (ctx)=>{
  var appId = testAppid
  var secret = testSecret
  
  // const jsapi_ticket = await wx.api('/cgi-bin/token?grant_type=client_credential&appid=wx3243067fdf4d7a2e&secret=139b4edf6460fe527e63a9b2e8839941').then(res => {
  const jsapi_ticket = await wx.api(`/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${secret}`).then(res => {
    // console.log(res, 999)
    return res.access_token
  }).then(access_token => {
    return wx.api('/cgi-bin/ticket/getticket?access_token=' + access_token + '&type=jsapi').then(res => {
      // console.log(res)
      return res.ticket
    })
  })
  const url = ctx.request.query.url
  const nonceStr = uuidv4().replace(/-/g, '')
  const timestamp = ~~(+new Date() / 1000)
  const signature = sha1(`jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`)
  console.log(signature, jsapi_ticket, timestamp, nonceStr)
  console.log(url)
  
  const result = {
    code: 200,
    message: '',
    data: {
      appId,
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature // 必填，签名
    }
  }
  ctx.body = result
}

/* 微信服务器会对这个接口发送请求，会携带 一个echostr的字段 如果这个接口返回这个串的值就代表校验通过 */
/* 假如是用来玩。。。直接返回即可，如果是真实的项目 还是要严格校验一下的 */
const verify = async (ctx) => {
  const checkSignature = (params, token) => {
    const ArrData = [token, params.timestamp, params.nonce].sort().join(''); 
    //将token （自己设置的） 、timestamp（时间戳）、nonce（随机数）三个参数进行字典排序
    var sha1 = require('crypto').createHash('sha1');
    //将上面三个字符串拼接成一个字符串再进行sha1加密
    sha1.update(ArrData);
    return sha1.digest('hex') == params.signature;
    //将加密后的字符串与signature进行对比，若成功，返回echostr
  }

  // const tsturl = '/wx/verify?signature=408b2214dd00ec05864d7741514a0de88e687138&echostr=4032911788430801367&timestamp=1608718359&nonce=751936113'
  // const tsturl = '/wx/verify?signature=033cb075f32849acf5aa20c72c210546fc68f93d&echostr=7268271941968435903&timestamp=1608882842&nonce=668904465'

  // console.log("token :",TOKEN);

  // console.log(ctx.request.url)

  const txParams = URI.parseQuery(new URI(ctx.request.url).query())
  // const txParams = URI.parseQuery(new URI(tsturl).query())
  console.log(ctx.request)
  if (checkSignature(txParams, TOKEN)) {
    ctx.body = txParams.echostr
  } else {
    ctx.body = '翻滚吧，牛宝宝！'
  }
}

const auth = async ctx => {
  var appId = testAppid
  console.log(ctx.request.header.host)
  const url = encodeURIComponent('http://' + ctx.request.header.host + '/wx.html')
  // const url = encodeURIComponent('http://120.53.221.250/wx.html')

  const scope = 'snsapi_base' // （不弹出授权页面，直接跳转，只能获取用户openid
  // const scope = 'snsapi_userinfo' // （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）
  // ctx.status = 301
  ctx.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${url}&response_type=code&scope=${scope}&state=666#wechat_redirect`)
}

module.exports = {
  wxconfig,
  verify,
  auth
}
