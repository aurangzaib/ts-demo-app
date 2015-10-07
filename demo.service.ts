// typescript namespace
module appNamespace {

   // define & export class
   export class AppService {

      static $inject = ["$http"];
      someProperty: Object;
      someMethod: (anything: string) => Object;

      constructor(private $http: ng.IHttpService) {
         // a method which returns some object
         someMethod: (anything: string) => new Object({
            name: "Hello World"
         });
      }
   }
}

// use class as service
angular.module("demoApp").service("appService", appNamespace.AppService);
