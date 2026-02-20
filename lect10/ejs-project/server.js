const express = require("express");
const app = express();
const PORT = 3000;

//set viewengine
app.set("view engine", "ejs");
//routes
app.get("/", (req, res) => {
  const user = {
    name: "Razia",
    email: "razia0007@gmail.com",
    contact: 7867563456,
  };
  res.render("index", { user });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
