'use strict';

angular.module('idlecars')
.controller('auth.new.controller', function ($scope, TokenService) {
  $scope.login = function() {
    var newToken = new TokenService($scope.user);
    newToken.$save().then(function(data) {
      console.log(data.token);
    });
  };
});
