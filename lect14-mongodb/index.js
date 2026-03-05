const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbname = "mydb";
async function getData() {
  let result = await client.connect();
  let db = result.db(dbname);
  let collection = db.collection("users");
  let response = await collection.find().toArray();
  console.log(response);
}
getData();
