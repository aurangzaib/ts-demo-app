// interfaces
interface AppDirectiveAttributes extends ng.IAttributes {
   someInterestingThing: string;
}

// directive
function AppDirective($parse: ng.IParseService): ng.IDirective {
   return {
      restrict: "A",
      link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: AppDirectiveAttributes) => {

      }
   };
}

// linking to 
app.directive("appDirective", AppDirective);
