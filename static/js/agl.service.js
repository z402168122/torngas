/**
 * Created by mqy on 14-1-27.
 */
faster.factory("deploy_service", ["$http", function ($http) {
    "use strict";
    var xsrf = $("input[name=_xsrf]").val();
    return {
        deploy: function (params) {
            params = $.extend(params, {_xsrf: xsrf});
            return $http.post(
                '/deploy',
                params
            );

        },
        get: function (g_id) {
            var params = $.extend(params, {_xsrf: xsrf});
            return $http.get(
                '/project/get/' + g_id
            );
        }
    }
}]);
