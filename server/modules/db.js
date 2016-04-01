var mongoose = require('mongoose');

var MongoURI = "mongodb://localhost/superhero_collection";

var MongoDB = mongoose.connect(MongoURI).connection;

MongoDB.on("error", function(err){
    console.log("There was an error with Mongo");
});

MongoDB.once("open",function(){
  console.log("Mongo Up and Running");

});

module.exports = MongoDB;
