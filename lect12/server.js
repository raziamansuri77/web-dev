const express = require("express");
const app = express();
const PORT = 3000;
//Middleware
const logger = (req, res, next) => {
  console.log("Request recived");
  next();
};
app.use(logger);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
