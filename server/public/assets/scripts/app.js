var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
        $routeProvider.
          when('/heroEntry', {
            templateUrl: "/views/routes/heroEntry.html"
          }).
          when('/heroList', {
            templateUrl: "/views/routes/heroList.html"
          }).
          otherwise({
            redirectTo: "/heroEntry"
          });
}]);
