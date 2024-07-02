var fs = require("fs");

// Synchronous writing file
fs.writeFileSync("READMECOPY1.md", "Read me copy 11111");

// asynchronous reading file
fs.readFile("READMECOPY.md", "utf8", function (error, data) {
  console.log("Asynchronous read file");
  console.log(data);
});

// synchronous reading file
var readFile = fs.readFileSync("READMECOPY1.md", "utf8");
console.log(readFile);
