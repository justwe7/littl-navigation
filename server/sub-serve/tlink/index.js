const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const koaBodyParser = require('koa-bodyparser');
// const routers = require('./routers/index');
const Router = require('koa-router');
const shortid = require('shortid');
const dayjs = require('dayjs');
const Db = require('./db');
const db = new Db({
  table: 'main',
  model: {
    _id: String,
    url: { type: String, unique: true, dropDups: true, index: true },
    expires: Number,
    createTime: Number,
  }
})
const navDb = new Db({
  table: 'nav',
  model: {
    name: String,
    url: String,
    type: { type: Number },
    // name: { type: String },
    // url: { type: String },
  }
})

const creatData = async ({ url, day = 3 }) => {
  if (!url || !/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(url)) {
    return Promise.reject('请传入正确的网站域名！')
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
    expires: date.add(day, 'day').valueOf(), // 过期
    createTime: date.valueOf()
  }
  // const dbData = {
  //   originLink: 'https://162223.com', tLink: 'https://t.littl.cn/ss', path: '22ss', expires: +new Date(), createTime: +new Date()
  // }

  try {
    return await db.add(dbData)
  } catch (error) {
    try {
      return await db.find({ url })
    } catch (error) {
      return Promise.reject(error)
    }
  }
  // return db.add(dbData)
}

// const creatNav = async ({ url, name } = {}) => {
//   // if (!url || !/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(url)) {
//   //   return Promise.reject('请传入正确的网站域名！')
//   // }
//   const a = [
//     "百度地图###http://map.baidu.com/?moulem",
//     "谷歌地图###http://www.google.cn/maps",
//     "高德地图###https://www.amap.com/",
//     "百度翻译###http://fanyi.baidu.com/",
//     "有道翻译###http://fanyi.youdao.com/",
//     "谷歌翻译###https://translate.google.cn/#auto/zh-CN/",
//     "天气###https://www.baidu.com/s?wd=天气",
//     "计算器###https://www.baidu.com/s?wd=计算器",
//     "果核破解###https://www.ghpym.com/",
//     "500彩票###http://www.500.com/",
//     "12306###https://kyfw.12306.cn/otn/index/init",
//     "百度云###https://pan.baidu.com/",
//     "百度脑图###http://naotu.baidu.com/home",
//     "程序员工具###https://tool.lu/?fr=moulem.com",
//     "草料二维码###https://cli.im/",
//     "在线识曲###https://www.midomi.com/?fr=moulem.com",
//     "企查查###http://www.qichacha.com/",
//     "天眼查###https://www.tianyancha.com/",
//     "QQ邮箱###https://mail.qq.com/",
//     "163/126邮箱###http://email2.163.com/",
//     "格式转换###https://cn.office-converter.com/",
//     "单位换算###https://www.baidu.com/s?wd=单位换算",
//     "网盘搜索###http://www.panduoduo.net/?fr=moulem.com",
//     "磁力搜索###http://www.cilimao.me/?fr=moulem.com"
// ]
// const aaa = a.map(item => {
//   // console.log(item)
//   return {
//     name: item.split('###')[0],
//     url: item.split('###')[1],
//     type: 5
//   }
// })

//   try {
//     return navDb.insertMany(aaa)
//   } catch (error) {
//     console.log(error)
//     return 3333333333
//   }
//   console.log(a)
//   // const date = dayjs()
//   const dbData = {
//     type: '',
//     name,
//     url,
//     // expires: date.add(day, 'day').valueOf(), // 过期
//     // createTime: date.valueOf()
//   }
  
//   // const dbData = {
//   //   originLink: 'https://162223.com', tLink: 'https://t.littl.cn/ss', path: '22ss', expires: +new Date(), createTime: +new Date()
//   // }
//   console.log(dbData)
//   try {
//     return await navDb.add(dbData)
//   } catch (error) {
//     return Promise.reject(error)
//   }
//   // return db.add(dbData)
// }
// creatNav()
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
      ctx.body = '短链生成器，默认三天有效期'
      // static(path.join( __dirname, '../../html/index.html'))
    });
    router.get('/v1/tlink/list', async (ctx) => {
      try {
        const dbData = await db.getList({ pageSize: ctx.query.pageSize, pageNum: ctx.query.pageNo })
        const count = await db.getCount()
        // console.log(dbData)
        ctx.body = {
          code: 200,
          data: {
            pageNum: ctx.query.pageNo || null,
            totalCount: count,
            list: dbData
          }
        }
      } catch (error) {
        ctx.body = {
          code: -1,
          msg: '查询失败'
        }
      }
    });
    router.get('/v1/nav/list', async (ctx) => {
      try {
        const query = ctx.query.type ? { type: ctx.query.type } : {}
        // const dbData = await creatNav({ url: 'http://163.com', name: '哈哈' })
        const dbData = await navDb.getList({ pageSize: 24*6, pageNum: 0, query })
        ctx.body = {
          code: 200,
          data: dbData
        }
      } catch (error) {
        console.log(error)
        ctx.body = {
          code: -1,
          msg: '查询失败'
        }
      }
    });
    router.post('/v1/nav/update', async (ctx) => {
      // console.log(ctx.request.headers['access-token'].length, ctx.request.headers['Access-Token'])
      if (!ctx.request.body._id/*  || !(ctx.request.headers['Access-Token']) */) {
      // if (!ctx.request.body._id || !/^[a-z|0-9]{31}$/.test(ctx.request.headers['Access-Token'])) {
        ctx.body = {
          code: -1,
          msg: '非法请求！'
        }
        return false
      }
      try {
        const params = ctx.request.body || {}
        // const dbData = await creatNav({ url: 'http://163.com', name: '哈哈' })
        const dbData = await navDb.update(params._id, { name: params.name, url: params.url })
        ctx.body = {
          code: 200,
          msg: '更新成功！'
        }
      } catch (error) {
        console.log(error)
        ctx.body = {
          code: -1,
          msg: '查询失败'
        }
      }
    });
    router.get('/:id', async (ctx) => {
      // console.log(ctx.params)
      try {
        const dbData = await db.find({ _id: ctx.params.id })
        // ctx.status = 301;
        // console.log(dbData, 222)
        if (!dbData) {
          await db.del({ _id: ctx.params.id })
          ctx.body = {
            code: -1,
            msg: '短链已过期，请重新生成~'
          }
        } else {
          ctx.redirect(dbData.url)
        }
      } catch (error) {
        ctx.body = {
          code: -1,
          msg: '短链无效'
        }
      }
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
        // console.log(dbData)
        ctx.body = { code: 200, msg: '成功', data: 'https://t.littl.cn/' + dbData._id }
      } catch (error) {
        // console.log(error)
        ctx.body = { code: -1, msg: JSON.stringify(error), data: null }
      }
    })

    this.app.use(koaBodyParser());

    // app.use(static(path.join( __dirname, '../dist')))
    // app.use(static(path.join( __dirname, '../assets')))

    this.app.use(async (ctx, next) => {
      await next();
      if (/localhost|littl.cn/.test(ctx.request.header.origin)) {
        ctx.set('Access-Control-Allow-Origin', '*')
      }
    })

    this.app.use(router.routes());
  }
  listen (port) {
    this.app.listen(port, '0.0.0.0'); // 如若没有0.0.0.0可能会导致部署无法访问
  }
}

module.exports = CreateTlinkServe
