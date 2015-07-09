'use strict';

angular.module('idlecars')
.controller('newUser.password.controller', function ($scope, $rootScope, $state, DriverService, AuthService, RequireAuthService) {
  var minPassword = 2;

  $scope.fields =  [{
    label: 'Create a password',
    placeholder: 'Add a password',
    name: 'password',
    type: 'password',
    minlength: minPassword,
    autoFocus: true,
  },
  {
    label: 'Confirm password',
    placeholder: 'Confirm password',
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
    return $scope.newUser.password === $scope.newUser.re_password;
  }

  var _saveUser = function() {
    var newDriver = new DriverService($scope.newUser);

    newDriver.$save().then(function() {
      return AuthService.login(_loginParams());
    }).then(RequireAuthService.resolve);
  }

  var _loginParams = function() {
    return {
      username: $scope.newUser.phone_number,
      password: $scope.newUser.password,
    }
  }
});
