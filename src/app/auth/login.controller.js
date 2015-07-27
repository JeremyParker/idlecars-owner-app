'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, $stateParams, Restangular, AppNotificationService, RequireAuthService, AuthService) {

  // TODO: find a place to store stuff like this
  $scope.min_password = 2;

  if ($stateParams.username) {
    $scope.user = { username: $stateParams.username };
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
    AppNotificationService.push("Sorry, that didn't work. Please double-check your phone number.");
    $scope.user.password = '';
  }

  $scope.resetPassword = function() {
    if (!$scope.user) {
      AppNotificationService.push('Please enter your phone number.');
      return
    }
    var postParams = { phone_number: $scope.user.username };
    var passwordReset = Restangular.all('password/reset_setups');
    passwordReset.post(postParams)
    .then(function() {
      // TODO(JP) - hook up SMS service and $state.go to the SMS screen that @craigstar made.
      AppNotificationService.push('A password recovery email has been sent to your address.');
    })
    .catch(function(error) {
      if (error.data.phone_number) {
        _phoneNotFound();
      }
    });
  };
});
