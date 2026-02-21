const express = require("express");
const app = express();
//set ejs
app.set("view engine", "ejs");
app.get("", (req, res) => {
  const user = {
    name: "Razia",
    contact: 8969987,
    skills: ["php", "nodejs", "java", "c", "c++"],
  };
  res.render("index", { user });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
