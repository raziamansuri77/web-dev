const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Server is created using variable");
  res.end();
});
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
