const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "mydb";
async function dbConnect() {
  let result = await client.connect();
  db = result.db(dbName);
  return db.collection("users");
}
module.exports = dbConnect;
