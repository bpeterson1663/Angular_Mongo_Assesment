myApp.controller("HeroEntryController", ["$scope", "HeroService", function($scope, HeroService){

  $scope.powers = ["Invisibility","Flight","Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"];
  HeroService.getHeros();

  $scope.addHero = function(hero){
      HeroService.postHero(hero);

  };
}]);

myApp.controller('HeroListController', ["$scope", "HeroService", function($scope, HeroService){
var heroService = HeroService;
  heroService.getHeros();
  console.log("Hero Service",heroService.data);
  $scope.data = heroService;

  $scope.heroList = $scope.data;
  console.log($scope.heroList);

  $scope.deleteHero = function(hero){
    heroService.deleteHero(hero);
  };
}]);


// myApp.controller("WineController", ['$scope', '$http', 'WineCellarService', function($scope, $http, WineCellarService){
//   //store the factory object in wineCellar
//     var wineCellar = WineCellarService;
//     //call the getWine function on the wineCellar object to establish the connection to the api
//     wineCellar.getWine();
//     //information collected from the dom and then passed into the searchWine function
//     $scope.search = function(winery){
//         wineCellar.searchWine(winery);
//     };
//     //set a variable on the scope that is equal to the wineCellar object to be displayed on the dom
//     $scope.wineSelection = wineCellar;
//     wineList = wineCellar;
//     console.log("Wine Cellar.data is : ", $scope.wineSelection);
//
//
//     $scope.addWine = function(addWine){
//       wineCellar.addWine(addWine);
//     };
//
// }]);
