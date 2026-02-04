const http = require("http");
http
  .createServer((req, res) => {
    res.write("Server is running on port 3000");
    res.end();
  })
  .listen(3000);
