const express = require("express");
const app = express();
const dbConnect = require("./db");
app.use(express.json());
// api get method
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

//api post method
app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});
app.listen(5000);
