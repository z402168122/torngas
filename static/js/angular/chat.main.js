/**
 * Created with PyCharm.
 * User: mengqingyun
 * Date: 13-11-20
 * Time: 下午5:00
 * To change this template use File | Settings | File Templates.
 */
var mainChat = angular.module("main-chat", [], angular.noop);

mainChat.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{:');
    $interpolateProvider.endSymbol(':}');
});

mainChat.filter("timeFmt", function () {
    "use strict";
    return function (time_num, format) {
        var time = {};
        var input = new Date(time_num*1000) ;
        time.Year = input.getFullYear();
        time.TYear = ("" + time.Year).substr(2);
        time.Month = input.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : time.Month;
        time.Day = input.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : time.Day;
        time.Hour = input.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : time.Hour;
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : time.hour;
        time.Minute = input.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : time.Minute;
        time.Second = input.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : time.Second;
        time.Millisecond = input.getMilliseconds();

        var oNumber = time.Millisecond / 1000;

        if (format != undefined && format.replace(/\s/g, "").length > 0) {
            format = format
                .replace(/yyyy/ig, time.Year)
                .replace(/yyy/ig, time.Year)
                .replace(/yy/ig, time.TYear)
                .replace(/y/ig, time.TYear)
                .replace(/MM/g, time.TMonth)
                .replace(/M/g, time.Month)
                .replace(/dd/ig, time.TDay)
                .replace(/d/ig, time.Day)
                .replace(/HH/g, time.THour)
                .replace(/H/g, time.Hour)
                .replace(/hh/g, time.Thour)
                .replace(/h/g, time.hour)
                .replace(/mm/g, time.TMinute)
                .replace(/m/g, time.Minute)
                .replace(/ss/ig, time.TSecond)
                .replace(/s/ig, time.Second)
                .replace(/fff/ig, time.Millisecond)
                .replace(/ff/ig, oNumber.toFixed(2) * 100)
                .replace(/f/ig, oNumber.toFixed(1) * 10);
        }
        else {
            format = time.Year + "-" + time.Month + "-" + time.Day + " " + time.Hour + ":" + time.Minute + ":" + time.Second;
        }
        return format;
    };
});