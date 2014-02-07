/**
 * Created by mqy on 14-1-27.
 */
faster.controller("DeployController", ['$scope', "deploy_service", "$window", function ($scope, deploy, $window) {
    "use strict";

    //发布状态初始化
    $scope.groupid = $window.current_groupid;
    var deploy_click = function (project, group_id, proj_name) {

        if (!project.is_deploy) {
            project.is_deploy = true;
            var params = {
                group_id: group_id,
                proj_name: proj_name
            };
            var result = deploy.deploy(params);
            result.success(function (data) {

                if (data.is_succ == true) {
                    project.succ = true;
                    project.failure = false;
                    project.msg = data.msg;
                    project.status = '发布成功';
                }
                else {
                    project.succ = false;
                    project.failure = true;
                    project.msg = data.msg;
                    project.status = '发布失败';
                }
                project.is_deploy = false;
            })
        }

    };

    var project = deploy.get($window.current_groupid);
    project.success(function (data) {

        if (data.is_succ) {
            data.projects.forEach(function (e) {

                if (e.is_succ == true) {
                    e.status = "已发布成功";
                    e.succ = true;
                    e.na = false;
                    e.failure = false;
                } else if (e.is_succ == 'na') {
                    e.status = '当前未发布';
                    e.succ = false;
                    e.na = true;
                    e.failure = false;
                }
                else if (data.is_succ == 'ing') {
                    e.succ = false;
                    e.failure = false;
                    e.ing = true;
                    e.na = false;
                    e.msg = data.msg;
                    e.status = '发布中';
                }
                else {
                    e.status = '发布失败';
                    e.succ = false;
                    e.na = false;
                    e.failure = true;
                }

                e.is_deploy = false;
                e.dclick = function () {
                    deploy_click(e, $scope.groupid, e.name);
                };

            });
            $scope.projects = data.projects

        } else {
            $scope.projects = []
        }
    });


}]);