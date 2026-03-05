const dbconnect = require("./db");
const insert = async () => {
  const db = await dbconnect();
  const result = await db.insertOne({
    name: "Kapil",
    email: "kapil890@gmail.com",
    contact: 4625763598,
  });
};
insert();
