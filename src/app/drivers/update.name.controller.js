'use strict';

angular.module('idlecars')
.controller('driver.update.name.controller', function ($scope, $rootScope, $state, MyDriverService) {
  $scope.user = {};

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

  MyDriverService.get().then(function (me) {
    $scope.user.first_name = me.first_name;
    $scope.user.last_name = me.last_name;
  })

  $rootScope.navSave = function() {
    MyDriverService.patch($scope.user).then(function () {
      $state.go('driverAccount');
    })
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
})
