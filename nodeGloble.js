const http = require("const");
http
  .createServer((req, res) => {
    res.write("Creating server using global variable");
    res.end();
  })
  .listen(8080);
