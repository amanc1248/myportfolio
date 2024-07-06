var express = require("express");
var app = express();

app.get("/profile/:id", function (req, res) {
  res.send("You requested to see a profile with the id of " + req.params.id);
});
app.listen(3000);
