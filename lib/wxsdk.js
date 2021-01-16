const request = require('request');
class wechatSdk {
  constructor(props) {
    this.baseUrl = 'https://api.weixin.qq.com'
  }
  api (path, params) {
    return new Promise((resolve, reject) => {
      request(this.baseUrl + path, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }
}

module.exports = wechatSdk
