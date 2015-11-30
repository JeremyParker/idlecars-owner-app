'use strict';

angular.module('idlecars')
.controller('plate.controller', function ($scope, $rootScope, $state, CarService, NavbarService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'To add a car, please enter the TLC plate of the car. We verify that all listed cars are TLC registered:',
    name: 'plate',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $scope.isBusy = true;
    CarService.create({plate: $scope.user.plate})
    .then(function (car) {
      $state.go('cars.add.confirm', {carId: car.id, car: car})
    })
    .finally(function () { $scope.isBusy = false })
    // TODO: catch error
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  NavbarService.validateInit($scope);
})
