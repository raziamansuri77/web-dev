const http = require("http");
http
  .createServer((req, res) => {
    res.write("Hello from server");
    res.end();
  })
  .listen(8080);
