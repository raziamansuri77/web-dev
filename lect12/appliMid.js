const express = require("express");
const app = express();
const PORT = 3000;
//middleware
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You are under aged");
  } else {
    next();
  }
};
app.use(reqFilter);
app.get("", (req, res) => {
  res.send("Hello from application middleware");
});
app.get("/user", (req, res) => {
  res.send("Hello user");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
