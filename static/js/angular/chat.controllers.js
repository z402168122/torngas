/**
 * Created with PyCharm.
 * User: mengqingyun
 * Date: 13-11-21
 * Time: 上午11:28
 * To change this template use File | Settings | File Templates.
 */

mainChat.controller("PublishController", ['$scope', 'message_service', function ($scope, message) {
    "use strict";


    $scope.send_click = function () {
        var result = message.publish($scope.publish_content)

        result.success(function (data) {

        })
    };
    $scope.publish_content = "说点什么..."

}]);

mainChat.controller("UpdateController", ['$scope', 'message_service', '$timeout', function ($scope, message, $timeout) {
    "use strict";
    $scope.newmessage =[];
    function pull() {
        var result = message.update_message()
            .success(function (data) {
                $scope.newmessage.push(data);

                $timeout(pull, 1)

            })
            .error(function (data) {
                $timeout(pull, 5000);

            });
    }

    pull();

//    result.success()

}]);