const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  //create schema
  const usersSchema = new mongoose.Schema({
    name: String,
  });
  //create model
  const userModel = mongoose.model("users", usersSchema);

  let result = new userModel({ name: "Razia" });
  console.log(result);
};
main();
