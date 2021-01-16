const Router = require('koa-router');
const router = new Router();
const static = require('koa-static');

/* 定义首页 */
router.get('/', async (ctx)=>{
  // ctx.body = 'hello doge'
  static(path.join( __dirname, '../../html/index.html'))
});

/* 业务模块 */
const wx = require('./modules/wx');
router.use(wx.routes());

module.exports = router;
