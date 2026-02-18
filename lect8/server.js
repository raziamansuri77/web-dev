const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log("It provide directory name", __dirname);
