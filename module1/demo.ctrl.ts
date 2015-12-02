/// <reference path="demo.all.ts" />

angular.module("demoApp")
   .controller("DemoCtrl", ["$rootScope", function ($rootScope) {

   }]);

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

      constructor(private $scope:ng.IScope, // from angular.d.t
                  private $http:ng.IHttpService,
                  private appService:appNamespace.AppService // service
      ) {

         $scope.whatever = "whatever";

         appService.someMethod("ok google");

         //appService.someMoreMethods("justAboutAnything");

         // this method not available in appService
         // should give error
      }
   }
}

// use class as controller
angular.module("demoApp").controller("demoCtrl", appNamespace.DemoCtrl);
