/// <reference path="demo.all.ts" />
// typescript namespace
var appNamespace;
(function (appNamespace) {
    // define config for demoApp
    angular.module("demoApp").config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: 'someShinyUrl',
            controller: 'demoCtrl'
        });
    }]);
})(appNamespace || (appNamespace = {}));
//# sourceMappingURL=demo.config.js.map