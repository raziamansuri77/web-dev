const dbconnect = require("./db");
const deleteData = async () => {
  let data = await dbconnect();
  let result = await data.deleteMany({ name: "Kapil" });
};
deleteData();
