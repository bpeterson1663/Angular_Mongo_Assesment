myApp.factory("HeroService", ["$http", function($http){
  var data = {}

  var getHeros = function(){
    $http.get('/getHeroDataBase').then(function(response){
        data.response = response.data;
        console.log("Heros in Database coming back: ", data.response);
    });
  };
  var postHero = function(hero){
    $http.post('/postHeroDataBase', hero).then(function(response){

    });
  };
  var deleteHero = function(hero){
    $http.delete("/hero/"+hero._id).then(function(response){
      getHeros();
    });
  };
  return{
    data: data,
    getHeros: getHeros,
    postHero: postHero,
    deleteHero: deleteHero
  }
}]);
