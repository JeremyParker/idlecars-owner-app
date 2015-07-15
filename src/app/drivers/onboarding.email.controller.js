'use strict';

angular.module('idlecars')
.controller('driver.onboarding.email.controller', function ($scope, $rootScope, $state) {
  $scope.newUser = {};

  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    // TODO:update the driver
    DocRouterService.goRequiredDoc();
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
});
