const fs = require("fs");
const path = process.argv;
fs.unlinkSync(path[2]);
