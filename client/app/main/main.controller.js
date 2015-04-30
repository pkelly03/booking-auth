'use strict';

angular.module('bookingAuthApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/properties').success(function(properties) {
      $scope.properties = properties;
    });

    $scope.addProperty = function() {
      if($scope.property === '') {
        return;
      }
      $http.post('/api/properties', { name: $scope.property });
      $scope.property = '';
    };

    $scope.deleteProperty = function(thing) {
      $http.delete('/api/properties/' + thing._id);
    };
  });
