var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    name: "Riyu",
    job: "Ninja",
    age: 29,
  };
  res.end(JSON.stringify(myObj));
});

server.listen(2001, "127.0.0.1");
console.log("Yo listening the server at 127.0.0.1");

// Methods for reading and writing the data
// 1. listen for the event, and whenever it reads it writes to the file
// myReadStream.on("data", function (chunk) {
//   console.log("new chunk received");
//   myWriteStream.write(chunk);
// });

// 2. this does the same as method 1
// myReadStream.pipe(myWriteStream);
