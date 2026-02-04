const http = require("http");
const data = require("./data");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application / json",
  });
  res.end(JSON.stringify(data.users));
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
