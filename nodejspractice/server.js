var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(`Request was made on ${req.url}`)
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end('Hey guys');
});
server.listen(3000,"127.0.0.1");
console.log("yodo now listening to poll 3000");