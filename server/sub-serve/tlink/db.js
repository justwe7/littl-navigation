const mongoose = require('mongoose');

class Db {
  constructor() {
    mongoose.connect('mongodb://localhost:27017/turi', {
      auth: { "authSource": "admin" },
      user: 'root',
      pass: 'root',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection;
    db.on("error", function (error) {
      if (error) {
        return console.log(error);
      }
    });
    db.on("open", function () {
      console.log("数据库连接成功");
    });

    const Schema = mongoose.Schema({
      _id: String,
      url: { type: String, unique: true, dropDups: true, index: true },
      expires: Number,
      createTime: Number,
    }, { collection: 'main' });
    this.Model = db.model("main", Schema);
  }
  del () {
    this.Model.remove({ name: '马云' }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
  async find (id) {
    try {
      const data = await this.Model.findOne({ _id: id })
      // console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
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
}

module.exports = Db
