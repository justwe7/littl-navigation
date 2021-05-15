const mongoose = require('mongoose');

class Db {
  constructor(props) {
    mongoose.connect('mongodb://localhost:27017/turi', {
      auth: { "authSource": "admin" },
      user: 'root',
      pass: 'root',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    mongoose.set('useCreateIndex', true)
    const db = mongoose.connection;
    db.on("error", function (error) {
      if (error) {
        return console.log(error);
      }
    });
    db.on("open", function () {
      console.log("数据库连接成功");
    });

    // const Schema = mongoose.Schema({}, { collection: table });
    const Schema = mongoose.Schema(props.model || {}, { collection: props.table });
    this.Model = db.model(props.table, Schema);
  }
  del (schema) {
    return this.Model.deleteOne(schema)
  }
  getList ({ pageSize = 10, pageNum = 1, query = {} }) {
    pageSize = 1*pageSize
    pageNum = 1*pageNum
    if (pageNum === 0) {
      pageNum = 1
    }
    pageNum--
    return this.Model.find({}).skip(pageNum * pageSize).limit(pageSize)
  }
  getCount () {
    return this.Model.find().count()
  }
  async find (schema) {
    schema.expires = { $gt: +new Date() }
    return this.Model.findOne(schema)
  }
  add (data) {
    // const dbData = {
    //   originLink: 'https://1623.com', tLink: 'https://t.littl.cn/ss', path: 'ss', expires: +new Date(), createTime: +new Date()
    // }
    // Model.find({ path: 'qweraaa' }, function (err, data) {
    //   if (err) {
    //     return console.log(err);
    //   } else {
    //     console.log(data);
    //   }
    // })
    return this.Model.create(data)
  }
  update (id, data) {
    return this.Model.updateOne({ _id: id }, data)
  }
  insertMany (data) {
    return this.Model.insertMany(data)
  }
}

module.exports = Db
