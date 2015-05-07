'use strict';

angular.module('bookingAuthApp')
  .controller('ReservationController', function ($scope, $http) {

    $http.get('/api/reservations').success(function(reservationsForProperty) {
      $scope.reservations = reservationsForProperty[0].reservations;
      console.log("here");
    });

  });

