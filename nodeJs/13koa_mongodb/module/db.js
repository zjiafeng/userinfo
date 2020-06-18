const MongoClient = require('mongodb').MongoClient; //引入mongodb数据库模块
const ObjectID = require('mongodb').ObjectID;
var Config = require('./conf'); //引入配置文件

const client = new MongoClient(Config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

class Db {
    static getInstance() {   /*1、单例  多次实例化实例不共享的问题*/
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }
    constructor() {
        this.dbClient = ''; /*属性 放db对象*/
        this.connect();
    }
    connect() { //连接数据库
        let _that = this;
        return new Promise((resolve, reject) => {
            if (!_that.dbClient) { /**解决数据库多次连接问题 */
                client.connect((err, client) => {
                    if (err) {
                        reject(err)
                    } else {
                        _that.dbClient = client.db(Config.dbName);
                        resolve(_that.dbClient)
                    }
                })
            } else {
                resolve(_that.dbClient)
            }
        })
    }
    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                var result = db.collection(collectionName).find(json);
                result.toArray(function (err, docs) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(docs);
                })
            })
        })
    }
    updata(collectionName, jsonOld, jsonNew) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).updateMany(jsonOld, {$set:jsonNew}, (err, docs) => {
                    if (err) {
                        reject(err);
                        return
                    }
                    resolve(docs);
                })
            })
        })
    }
    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).insertOne(json, (err, docs) => {
                    if (err) {
                        reject(err);
                        return
                    }
                    resolve(docs)
                })
            })
        })
    }
    remove(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).removeOne(json, (err, docs) => {
                    if (err) {
                        reject(err);
                        return
                    }
                    resolve(docs)
                })
            })
        })
    }
    getObjectId(id) { //mongodb中查询_id把字符串转换为对象
        return new ObjectID(id);
    }
}

module.exports = Db.getInstance();