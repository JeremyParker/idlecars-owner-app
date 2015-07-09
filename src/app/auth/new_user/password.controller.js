'use strict';

angular.module('idlecars')
.controller('newUser.password.controller', function ($scope, $rootScope, $state) {
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
    $state.go('.');
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid && _passwordsMatch();
  }

  var _passwordsMatch = function() {
    return $scope.newUser.password === $scope.newUser.re_password;
  }
});
