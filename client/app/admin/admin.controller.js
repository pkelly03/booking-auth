'use strict';

angular.module('bookingAuthApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });


angular.module('bookingAuthApp')
    .controller('MainSetupCtrl', function ($scope, $http, lodash) {

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
