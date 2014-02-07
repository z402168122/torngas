/**
 * Created by mqy on 14-1-27.
 */
var faster = angular.module("faster-main", [], angular.noop);

faster.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{{');
    $interpolateProvider.endSymbol('}}');
});