var express = require('express');
var router = express.Router();
var path = require('path');
var hero = require('../models/newHero.js')

router.get('/getHeroDataBase', function(req, res){
  hero.find({},function(err,data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post('/postHeroDataBase', function(req, res){
  var newHero = new hero({
      "alias" : req.body.alias,
      "first_name" : req.body.first_name,
      "last_name" : req.body.last_name,
      "city" : req.body.city,
      "power" : req.body.power
  });
  newHero.save(function(err,data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete("/hero/:id", function(req,res){
  hero.findByIdAndRemove(req.params.id, function(err,hero){
    if(err){
      console.log(err);
    }
    res.send(hero);
  });
});

module.exports = router;
