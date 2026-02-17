const fs = require("fs");
const path = process.argv;
fs.writeFileSync(path[2], path[3]);
