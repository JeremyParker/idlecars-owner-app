'use strict';

angular.module('idlecars')
.controller('cars.add.controller', function ($scope) {
  // this user is actually the car object
  $scope.user = {};
})

.controller('cars.add.plate.controller', function ($scope, $rootScope, $state) {
  $scope.fields = [{
    label: 'To add a car, please enter the TLC plate of the car. We verify that all listed cars are TLC registered:',
    name: 'plate',
    type: 'text',
    autoFocus: true,
  }];

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  $rootScope.navGoNext = function() {
    // TODO: send request to plate end point to verify the car
    $state.go('^.confirm')
  }
})

.controller('cars.add.confirm.controller', function ($scope, $state) {
  $scope.addCar = function () {
    // TODO: send request to add the car
    $state.go('cars')
  }
})
