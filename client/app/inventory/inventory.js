'use strict';

angular.module('bookingAuthApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inventory', {
        templateUrl: 'app/inventory/inventory.html',
        controller: 'InventoryController'
      })
  });
