const http = require("http");
function data(req, res) {
  res.write("Creating server using function");
  res.end();
}
http.createServer(data).listen(8080);
