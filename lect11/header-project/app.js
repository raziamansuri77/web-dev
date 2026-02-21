const express = require("express");
const app = express();
//set ejs
app.set("view engine", "ejs");
//routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
