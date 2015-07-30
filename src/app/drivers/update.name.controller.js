'use strict';

angular.module('idlecars')
.controller('driver.update.firstname.controller', function ($scope) {
  $scope.fields = [{
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];
})

.controller('driver.update.lastname.controller', function ($scope) {
  $scope.fields = [{
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];
})
