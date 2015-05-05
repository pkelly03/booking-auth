'use strict';

angular.module('bookingAuthApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reservations', {
        templateUrl: 'app/reservations/reservations.html',
        controller: 'ReservationController'
      })
  });
