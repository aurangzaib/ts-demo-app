// typescript namespace
module appNamespace {
   // define config for demoApp
   angular.module("demoApp").config(["$routeProvider", ($routeProvider) => {
      $routeProvider.when("/", {
         templateUrl: 'someShinyUrl',
         controller: 'demoCtrl'
      });
   }]);
}
