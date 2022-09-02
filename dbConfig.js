const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
dbName = "b26we";
const dbUrl = `mongodb+srv://harirayam:hari.rayam@harimongo.qvp2n.mongodb.net/${dbName}`;
module.exports = { dbUrl, mongodb, MongoClient, dbName };
