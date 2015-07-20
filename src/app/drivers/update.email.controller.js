'use strict';

angular.module('idlecars')
.controller('driver.update.email.controller', function ($scope) {
  $scope.fields = [{
    label: 'Update your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];
})
