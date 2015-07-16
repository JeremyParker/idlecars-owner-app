'use strict';

angular.module('idlecars')
.controller('driver.update.email.controller', function ($scope, MyDriverService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'Update your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  MyDriverService.get().then(function (me) {
    $scope.user.email = me.email;
  })
})
