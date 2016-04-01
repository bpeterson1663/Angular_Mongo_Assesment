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

  return{
    data: data,
    getHeros: getHeros,
    postHero: postHero
  }
}]);
