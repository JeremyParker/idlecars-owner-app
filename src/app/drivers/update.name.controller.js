'use strict';

angular.module('idlecars')
.controller('driver.update.name.controller', function ($scope) {
  $scope.fields = [{
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  },
  {
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
  }];

  $scope.user;
})
