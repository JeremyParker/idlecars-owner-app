'use strict';

angular.module('idlecars')
.controller('newUser.phoneNumber.controller', function ($scope, $rootScope, $state, Restangular, AppNotificationService) {
  $scope.fields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'text',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    var phoneNumber = Restangular.one('phone_numbers', $scope.newUser.phone_number);
    phoneNumber.get()
    .then(function() {
      $state.go('login', {username: $scope.newUser.phone_number}).then(function() {
        AppNotificationService.push("Cool, you already have an account, enter your password.");
      });
    })
    .catch(function() {
      // Phone not found found, continue creating account
      $state.go('^.password');
    });
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
});
