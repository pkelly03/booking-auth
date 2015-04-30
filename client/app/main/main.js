'use strict';

angular.module('bookingAuthApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/setup', {
        templateUrl: 'app/main/setup.html',
        controller: 'MainSetupCtrl'
      });
  });
