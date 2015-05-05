'use strict';

angular.module('bookingAuthApp')
  .controller('InventoryController', function ($scope, $http) {

    $http.get('/api/inventory').success(function(inventory) {
      $scope.inventory = inventory;
    });

  });

