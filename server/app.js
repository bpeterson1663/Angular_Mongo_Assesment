var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var db = require("./modules/db.js");
var index = require("./modules/index.js");


app.set("port", (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/", index);

app.get("/*", function(req, res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, '/public', file));
});

app.listen(app.get("port"),function(req, res){
  console.log("Server up and running on ", app.get('port'));
});

module.exports = app;
