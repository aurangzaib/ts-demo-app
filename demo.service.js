/// <reference path="demo.all.ts" />
// typescript namespace
var appNamespace;
(function (appNamespace) {
    // define & export class
    var AppService = (function () {
        //someMoreMethods:()=>void;
        function AppService($http) {
            this.$http = $http;
            // a method which returns some object
            this.someMethod = function (anything) { return new Object(); };
            // this.someMoreMethods = () => {};
        }
        AppService.$inject = ["$http"];
        return AppService;
    })();
    appNamespace.AppService = AppService;
})(appNamespace || (appNamespace = {}));
// use class as service
angular.module("demoApp").service("appService", appNamespace.AppService);
//# sourceMappingURL=demo.service.js.map