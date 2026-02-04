const http = require("http");
const data = (req, res) => {
  res.write("Creating server using arrow function");
  res.end();
};

http.createServer(data).listen(3000);
