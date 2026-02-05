const fs = require("fs");
const path = require("path");
//create folder path
const folder = path.join(__dirname, "fsFolder");
//create folder
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}
//create files
fs.writeFileSync(path.join(folder, "a.txt"), "File A");
fs.writeFileSync(path.join(folder, "b.txt"), "File B");
const files = fs.readdirSync(folder);
console.log(files);
