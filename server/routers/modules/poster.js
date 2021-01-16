const Router = require('koa-router');
const router = new Router();
const Poster = require('../../controller/poster')

router.get('/poster/preview', Poster.preview);

module.exports = router;
