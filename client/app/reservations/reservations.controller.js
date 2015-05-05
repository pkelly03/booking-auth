'use strict';

angular.module('bookingAuthApp')
  .controller('ReservationController', function ($scope, $http) {

    $http.get('/api/reservations').success(function(reservations) {
      $scope.reservations = reservations;
    });

  });

