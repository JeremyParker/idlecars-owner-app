'use strict';

angular.module('idlecars')
.controller('plate.controller', function ($scope, $rootScope, $state, CarService, NavbarService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'To add a car, please enter the car\'s TLC plate.',
    name: 'plate',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    CarService.create({plate: $scope.user.plate})
    .then(function (car) {
      $state.go('cars.add.confirm', {carId: car.id, car: car})
    })
    // TODO: catch error
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  NavbarService.validateInit($scope);
})
