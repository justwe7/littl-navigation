const { getBase64 } = require('../service/poster');
const { execFile, spawn } = require('child_process');
var path = require('path');
const preview = async (ctx)=>{
  const result = {
    code: 200,
    message: '',
    data: null
  }

  const request = ctx.request
  // request.body
  execFile(path.join(__dirname, '../../shell/img.sh'), {
    cwd: path.join(__dirname, '../../shell')
  }, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('个数', stdout);
  });
  // console.log(request.query)

  try {
    const base64 = await getBase64(request.query.url);
    result.success = true;
    result.data = base64;
  } catch (error) {
    result.code = -1
    result.message = error
  }

  // if (ctx.session.uid) {
  //   message = 'aleady login.'
  //   result.data = {
  //     uid: ctx.session.uid
  //   }
  // } else {
  //   try {
  //     let formData = ctx.request.body
  //     let res = await userService.signin(formData)
  //     if (res) {
  //       if (bcrypt.compareSync(formData.password, res.password)) {
  //         ctx.session = {uid: res.id}
  //         result.success = true
  //         result.data = {uid: res.id, name: res.name}
  //       } else {
  //         message = 'phone or password error.'
  //       }
  //     } else {
  //       message = 'no such user.'
  //     }
      
  //   } catch (error) {
  //     message = 'login failed'
  //     log.error(message+', '+error)
  //   }
  // }
  
  // result.message = message
  ctx.body = result
}

module.exports = {
  preview
}
