const Router = require('koa-router');
const router = new Router();
const static = require('koa-static');
const path = require('path');

/* 定义首页 */
router.get('/', async (ctx)=>{
  static(path.join(__dirname, '../../dist/index.html'))
});

/* 业务模块 */
const wx = require('./modules/wx');
router.use(wx.routes());

module.exports = router;
