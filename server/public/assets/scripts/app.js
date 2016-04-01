var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
        $routeProvider.
          when('/heroEntry', {
            templateUrl: "/views/routes/heroEntry.html",
            controller: "HeroEntryController"
          }).
          when('/heroList', {
            templateUrl: "/views/routes/heroList.html",
            controller: "HeroListController"
          }).
          otherwise({
            redirectTo: "/heroEntry"
          });
}]);
