'use strict';

angular.module('bookingAuthApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/admin', {
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl'
            })
            .when('/setup', {
                templateUrl: 'app/main/setup.html',
                controller: 'SetupCtrl'
            })
        ;
    });