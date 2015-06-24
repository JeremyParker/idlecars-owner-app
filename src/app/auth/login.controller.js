'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, AuthService) {
  $scope.login = function() {
    AuthService.login($scope.user);
  };
});
