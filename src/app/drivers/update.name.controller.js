'use strict';

angular.module('idlecars')
.controller('driver.update.name.controller', function ($scope, $rootScope, $state, MyDriverService) {
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

  $rootScope.navSave = function() {
    MyDriverService.patch(_loginParams()).then(function () {
      $state.go('driverAccount')
    })
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  var _loginParams = function() {
    return {
      first_name: $scope.user.firstname,
      last_name: $scope.user.lastname,
    }
  }
})
