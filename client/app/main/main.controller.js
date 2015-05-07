'use strict';

angular.module('bookingAuthApp')
  .controller('MainCtrl', function ($scope, $http, $location, Auth) {
    if (!Auth.isLoggedIn()) {
      console.log("Not logged in, redirecting to login screen");
      $location.path('/login');
    }

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

  });

angular.module('bookingAuthApp')
  .controller('SetupCtrl', function ($scope, $http, lodash) {

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

    $scope.noProperty = function() {
      return !lodash.isEmpty($scope.properties)
    }

    $scope.deleteProperty = function(property) {
      $http.delete('/api/properties/' + property._id);
    };
  });
