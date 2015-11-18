'use strict';

angular.module('idlecars')
.controller('driver.onboarding.email.controller', function ($scope) {
  $scope.user = {};

  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];
});
