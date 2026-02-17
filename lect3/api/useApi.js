const http = require("http");
const { apiData } = require("./apiData");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.end(JSON.stringify(apiData));
});
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
