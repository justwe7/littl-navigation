export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {//截取当前年
    fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));//当前年份的截取 可能是yy / yyyy
  }
  let oM = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let key in oM) {
    // if (new RegExp(`(${key})`).test(fmt)) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = oM[key] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
