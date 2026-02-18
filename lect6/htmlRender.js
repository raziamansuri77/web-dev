const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send(`<h1>Welcome, this is home page </h1>
  <a href="/about"><button>CLick to open about page</button></a>`);
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page.");
});
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Welcome to contact page</h1>
    <input type="text" placeholder="Enter your name"/>
    <button>Click Me</button>
    `);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
