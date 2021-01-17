const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const koaBodyParser = require('koa-bodyparser');
const app = new Koa();
const routers = require('./routers/index');

app.use(koaBodyParser());

app.use(static(path.join( __dirname, '../htmls')))
app.use(static(path.join( __dirname, '../assets')))

app.use(routers.routes());

app.listen(3000, '0.0.0.0'); // 如若没有0.0.0.0可能会导致部署无法访问
