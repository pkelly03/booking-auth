'use strict';

angular.module('bookingAuthApp')
  .controller('PropertyController', function ($scope, $http) {

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

    $scope.viewProperty = function(property) {
      console.log("about to view a property");

      $http.get('/api/properties/' + property._id).success(function(property) {
        console.log("viewing property");
        $scope.property = property;
      })
    };


    $scope.deleteProperty = function(thing) {
      $http.delete('/api/properties/' + thing._id);
    };
  });

