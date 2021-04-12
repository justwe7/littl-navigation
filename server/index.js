const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const koaBodyParser = require('koa-bodyparser');
const app = new Koa();
const routers = require('./routers/index');
const CreateTlinkServe = require('./sub-serve/tlink'); // 短链服务

app.use(koaBodyParser());

app.use(static(path.join( __dirname, '../dist')))
app.use(static(path.join( __dirname, '../assets')))

app.use(routers.routes());

app.listen(7777, '0.0.0.0'); // 如若没有0.0.0.0可能会导致部署无法访问

new CreateTlinkServe().listen(7778);
