const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("Welcome to home page");
});
const port = 300;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("SErver is running");
// res.end()
// });
// const port=3000;
