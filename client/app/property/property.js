'use strict';

angular.module('bookingAuthApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/property', {
        templateUrl: 'app/property/property.html',
        controller: 'PropertyController'
      })

  });
