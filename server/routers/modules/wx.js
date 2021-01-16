const Router = require('koa-router');
const router = new Router();
const WxApi = require('../../controller/wx')

router.get('/wx/wxconfig', WxApi.wxconfig);
router.get('/wx/verify', WxApi.verify);
router.get('/wx/auth', WxApi.auth);

module.exports = router;
