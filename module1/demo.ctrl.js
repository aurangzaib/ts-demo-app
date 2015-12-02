/// <reference path="demo.all.ts" />
angular.module("demoApp").controller("DemoCtrl", ["$rootScope", function ($rootScope) {
}]);
// typescript namespace
var appNamespace;
(function (appNamespace) {
    // define & export class
    var DemoCtrl = (function () {
        function DemoCtrl($scope, // from angular.d.t
            $http, appService // service
            ) {
            this.$scope = $scope;
            this.$http = $http;
            this.appService = appService;
            this.$inject = ["$scope", "$http"];
            $scope.whatever = "whatever";
            appService.someMethod("ok google");
            //appService.someMoreMethods("justAboutAnything");
            // this method not available in appService
            // should give error
        }
        return DemoCtrl;
    })();
    appNamespace.DemoCtrl = DemoCtrl;
})(appNamespace || (appNamespace = {}));
// use class as controller
angular.module("demoApp").controller("demoCtrl", appNamespace.DemoCtrl);
//# sourceMappingURL=demo.ctrl.js.map