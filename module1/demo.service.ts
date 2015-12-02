/// <reference path="demo.all.ts" />

// typescript namespace
module appNamespace {

   // define & export class
   export class AppService {

      static $inject = ["$http"];

      someProperty:Object;
      someMethod:(anything:string) => Object;

      //someMoreMethods:()=>void;

      constructor(private $http:ng.IHttpService) {

         // a method which returns some object
         this.someMethod = (anything:string) => new Object();

         // this.someMoreMethods = () => {};
      }
   }
}

// use class as service
angular.module("demoApp").service("appService", appNamespace.AppService);
