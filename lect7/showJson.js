const express = require("express");
const data = require("./data.json");
const app = express();
app.get("", (req, res) => {
  res.send("Home page");
});
app.get("/data", (req, res) => {
  res.json(data);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
