
// interfaces
module appNamespace {
   export interface demoCtrlScope extends ng.IScope {
      whatever: string;
   }
}

// typescript namespace
module appNamespace {
   // define & export class
   export class DemoCtrl {
      $inject = ["$scope", "$http"];
      constructor(
         private $scope: demoCtrlScope, // from angular.d.t
         private $http: ng.IHttpService,
         private appService: appNamespace.appService
         ) {
         $scope.whatever = "whatever";
         appService.someMoreMethods("justAboutAnything");
         // this method not available in appService
         // should give error
      }
   }
}

// use class as controller
angular.module("demoApp").controller("demoCtrl", appNamespace.demoCtrl);
