var express = require("express");
var path = require("path");
var app = express();
app.set('view engine','ejs')
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "../servehtml.html"));
});
app.get("/profile/:name", function (req, res) {
  res.render('profile', {person:req.params.name});
});
app.listen(3000, function (req, res) {
  console.log(`Server is running in port 3000`);
});
