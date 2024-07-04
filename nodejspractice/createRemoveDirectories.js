var fs = require("fs");
const path = require("path");
fs.mkdir("stuff", () => {
  fs.readFile(
    path.resolve(__dirname, "../READMECOPY1.md"),
    "utf8",
    (error, data) => {
      fs.writeFile(
        path.resolve(__dirname, "../stuff/writeMe.txt"),
        data,
        (error1, data2) => {
          console.log(data2);
        }
      );
    }
  );
});
