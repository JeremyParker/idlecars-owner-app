'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, $stateParams, $timeout, Restangular, AppNotificationService, RequireAuthService, AuthService) {

  // TODO: find a place to store stuff like this
  $scope.min_password = 2;

  if ($stateParams.username) {
    $timeout(function() { $scope.user.username = $stateParams.username; });
  }

  $scope.login = function() {
    // TODO: Do we need to check phone number?
    var phoneNumber = Restangular.one('phone_numbers', $scope.user.username);
    phoneNumber.get()
    .then(_login)
    .catch(_phoneNotFound)
  };

  var _login = function() {
    AuthService.login($scope.user)
    .then(function() {
      RequireAuthService.resolve();
    })
    .catch(function(error) {
      $scope.user.password = '';
    });
  }

  var _phoneNotFound = function() {
    // TODO: return this error from the server
    AppNotificationService.push("Sorry, we couldn't find this phone number");
    $scope.user.password = '';
  }
});
