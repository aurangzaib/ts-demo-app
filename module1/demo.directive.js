/// <reference path="demo.all.ts" />
// directive
function AppDirective($parse) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {
        }
    };
}
// linking to 
angular.module("demoApp").directive("appDirective", AppDirective);
angular.module("demoApp").directive("appDirective", ["$parse", function ($parse) {
    return {};
}]);
//# sourceMappingURL=demo.directive.js.map