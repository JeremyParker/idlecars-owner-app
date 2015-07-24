'use strict';

angular.module('idlecars')
.controller('newUser.password.controller', function ($scope, $rootScope, $state, DriverService, AuthService, RequireAuthService) {
  var minPassword = 2;

  $scope.fields =  [{
    label: 'Create a password',
    placeholder: 'password',
    name: 'password',
    type: 'password',
    minlength: minPassword,
    autoFocus: true,
  },
  {
    label: 'Confirm password',
    placeholder: 'password',
    name: 're_password',
    type: 'password',
    minlength: minPassword,
  }];

  $rootScope.navGoNext = function() {
    _saveUser();
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid && _passwordsMatch();
  }

  var _passwordsMatch = function() {
    return $scope.user.password === $scope.user.re_password;
  }

  var _saveUser = function() {
    var newDriver = new DriverService($scope.user);

    newDriver.$save().then(function() {
      return AuthService.login(_loginParams());
    }).then(RequireAuthService.resolve);
  }

  var _loginParams = function() {
    return {
      username: $scope.user.phone_number,
      password: $scope.user.password,
    }
  }
});
