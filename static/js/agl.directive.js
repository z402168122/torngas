/**
 * Created by mqy on 14-1-27.
 */
faster.directive("isDisabled", function () {
    "use strict";
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            scope.$watch("proj.is_deploy", function (newv, oldv, scope) {
                if(newv){
                    element.attr("disabled","disabled")
                }
                else{
                    element.removeAttr("disabled")
                }

            }, true);
        }
    };
});