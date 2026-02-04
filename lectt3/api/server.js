const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application / json",
  });
  res.end(
    JSON.stringify({
      success: true,
      message: "API working fine",
    }),
  );
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
