'use strict';

angular.module('idlecars')
.controller('newUser.phoneNumber.controller', function ($scope, $rootScope, $state) {
  $scope.fields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  console.log($scope.newUser);

  $rootScope.navGoNext = function() {
    $state.go('^.password');
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
});
