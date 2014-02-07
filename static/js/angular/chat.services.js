/**
 * Created with PyCharm.
 * User: mengqingyun
 * Date: 13-11-22
 * Time: 下午1:53
 * To change this template use File | Settings | File Templates.
 */
faster.factory("message_service", ["$http", function ($http) {
    "use strict";
    var xsrf = $("input[name=_xsrf]").val() ;
    return {
        publish: function (content) {
            return $http.post(
                '/chat/publish',
                {
                    publish_message: content,
                    _xsrf: xsrf
                }

            );

        },
        update_message:function(){
            return $http.post(
                '/chat/update',
                {
                    _xsrf: xsrf
                }
            );
        }
    }
}]);


mainChat.factory("txtarea_chack_service", ["$http", function ($http) {
    "use strict";
    var xsrf = $("input[name=_xsrf]").val() ;
    return {
        publish: function (content) {
            return $http.post(
                '/chat/publish',
                {
                    publish_message: content,
                    _xsrf: xsrf
                }

            );

        },
        update_message:function(){
            return $http.post(
                '/chat/update',
                {
                    _xsrf: xsrf
                }
            );
        }
    }
}]);