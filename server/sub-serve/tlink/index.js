const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const koaBodyParser = require('koa-bodyparser');
// const routers = require('./routers/index');
const Router = require('koa-router');
const shortid = require('shortid');
const dayjs = require('dayjs');
const Db = require('./db');
const db = new Db()

console.log(dayjs().add(7).valueOf())

const creatData = ({ url, day = 7 }) => {
  if (!url) {
    return Promise.reject('源网址必传！')
  }
  if (isNaN(Number(day))) {
    return Promise.reject('失效时期传数字')
  }
  const date = dayjs()
  const id = shortid.generate()
  const dbData = {
    _id: id,
    url,
    // tLink: 'https://t.littl.cn/' + id,
    // path: id,
    expires: date.add(day).valueOf(), // 过期 默认7天
    createTime: date.valueOf()
  }
  // const dbData = {
  //   originLink: 'https://162223.com', tLink: 'https://t.littl.cn/ss', path: '22ss', expires: +new Date(), createTime: +new Date()
  // }
  return db.add(dbData)
}
// creatData('https://2222.com')

/* 
db.main.insert({originLink: 'https://163.com', tLink: 'https://t.littl.cn/qweraaa', path: 'qweraaa',  expires: '1617872735551', createTime: '1617872735551' })
*/
class CreateTlinkServe {
  constructor(porps) {
    this.app = new Koa();
    const router = new Router();
    /* 定义首页 */
    router.get('/', async (ctx) => {
      ctx.body = 'hello doge'
      // static(path.join( __dirname, '../../html/index.html'))
    });
    router.get('/:id', async (ctx) => {
      // console.log(ctx.params)
      const dbData = await db.find(ctx.params.id)
      // ctx.status = 301;
      // console.log(dbData.originLink)
      ctx.redirect(dbData.url)
      // ctx.body = dbData
      // static(path.join( __dirname, '../../html/index.html'))
    });

    router.post('/api/gen', async (ctx) => {
      // console.log(ctx.request.body)
      /* try {
        const dbData = await creatData(ctx.request.body)
        console.log(dbData)
        ctx.body = {code: 200, msg: '成功', data: dbData}
      } catch (error) {
        ctx.body = {code: -1, msg: JSON.stringify(error), data: null}
      } */

      try {
        const dbData = await creatData(ctx.request.body)
        console.log(dbData)
        ctx.body = { code: 200, msg: '成功', data: 'http://t.littl.cn/' + dbData._id }
      } catch (error) {
        console.log(error)
        ctx.body = { code: -1, msg: JSON.stringify(error), data: null }
      }
    })

    this.app.use(koaBodyParser());

    // app.use(static(path.join( __dirname, '../dist')))
    // app.use(static(path.join( __dirname, '../assets')))

    this.app.use(router.routes());
  }
  listen (port) {
    this.app.listen(port, '0.0.0.0'); // 如若没有0.0.0.0可能会导致部署无法访问
  }
}

module.exports = CreateTlinkServe
