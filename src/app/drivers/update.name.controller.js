'use strict';

angular.module('idlecars')
.controller('driver.update.name.controller', function ($scope, MyDriverService) {
  $scope.user = {};

  $scope.fields = [{
    placeholder: 'First name',
    name: 'firstname',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  },
  {
    placeholder: 'Last name',
    name: 'lastname',
    type: 'text',
    maxlength: '30',
  }];

  MyDriverService.get().then(function (me) {
    $scope.user.firstname = me.first_name;
    $scope.user.lastname = me.last_name;
  })
})
