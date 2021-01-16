const puppeteer = require('puppeteer');
const URI = require('urijs');

const getBase64 = async (targetUrl = 'https://www.moulem.com/') => {
  try {
    let result
    const hostname = new URI(targetUrl).hostname()
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',                    // 沙盒模式
        // '--disable-setuid-sandbox',        // uid沙盒
        // '--disable-dev-shm-usage',         // 创建临时文件共享内存
        // '--disable-accelerated-2d-canvas', // canvas渲染
        // '--disable-gpu'                    // GPU硬件加速
      ]
    });
    const page = await browser.newPage();
    await page.goto(targetUrl);
    await page.screenshot({path: `static/${hostname}.png`});
    const base64 = await page.screenshot({encoding: "base64"});
    result = 'data:image/png;base64,' + base64
    await browser.close();
    return Promise.resolve(result)
    // return Promise.resolve(targetUrl)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
//   return new Promise((resolve, reject)=>{
//     userModel.getUserByPhone(formData.phone)
//     .then(res=>{
//       if (Array.isArray(res)  && res.length> 0) {
//         resolve(res[0])
//       } else {
//         resolve(null)
//       }
//     }, err=>{
//       reject(err)
//     })
//   })
}

module.exports = {
  getBase64
}
