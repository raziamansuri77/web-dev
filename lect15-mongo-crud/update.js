const dbconnect = require("./db");
const updateData = async () => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: "xyz" },
    { $set: { name: "Aarti", email: "aarti908@gmail.com" } },
  );
};
updateData();
