/**
 * Created with PyCharm.
 * User: mengqingyun
 * Date: 13-11-21
 * Time: 下午2:54
 * To change this template use File | Settings | File Templat_es.
 */

function txt_error(id, times) {
    window._error_normal = function (id, times) {
        var obj = $("#" + id);
        obj.css("background-color", "#FFF");
        if (times < 0) {
            return;
        }
        times = times - 1;
        setTimeout("_error_red('" + id + "'," + times + ")", 250);
    }
    window._error_red = function (id, times) {

        var obj = $("#" + id);
        obj.css("background-color", "#F6CECE");
        times = times - 1;
        setTimeout("_error_normal('" + id + "'," + times + ")", 250);
    }
    _error_red(id, times);

}


mainChat.directive("emptyCheck", function () {


    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.find("button").bind("click", function () {
                var isEmpty = _.isEmpty(element.find("textarea").val());

                if (isEmpty) {
                    txt_error(element.find("textarea")[0].id, 3)
                }
            })


        }
    };
});


mainChat.directive("txtareaEvent", function () {
    "use strict";
    function link(scope, element, attrs) {
        var init_content = scope.publish_content;
        element
            .bind("focus", function () {
                if (element.val() == init_content) {
                    element.val("")
                }

            })
            .bind("blur", function () {
                if (_.isEmpty(element.val()) || element.val() == init_content) {
                    element.val(init_content)
                }
            })


    }

    return {
//        scope: {initContent: "@ng-model"},
        restrict: "A",
        link: link
    };
});


mainChat.directive("scrollToend", function () {
    "use strict";
    return {
        restrict: "A",
        link: function (scope, element, attrs) {


            scope.$watch("newmessage", function (newv, oldv, scope) {
                element[0].scrollTop = 100000;
            }, true);


        }
    };
});