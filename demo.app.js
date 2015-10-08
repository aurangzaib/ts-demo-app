/// <reference path="demo.all.ts" />
// javascript version
angular.module("demoApp", ["DIs"]);
// typescript namespace
var appNamespace;
(function (appNamespace) {
    // angular app module
    angular.module("demoApp", ["dependencies injection"]);
})(appNamespace || (appNamespace = {}));
//# sourceMappingURL=demo.app.js.map