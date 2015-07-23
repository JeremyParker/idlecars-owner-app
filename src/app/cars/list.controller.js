'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, $timeout, CarService, CarFilterService) {
  $timeout(function() {
    $scope.costFilter = CarFilterService.costFilter || {};
  });

  CarService.query().$promise.then(function(cars) {
    CarFilterService.allCars = cars;
    $scope.cars = CarFilterService.filterCars();
  });

  $scope.didFilterCost = function(setting) {
    $scope.cars = CarFilterService.filterCost(setting);
  }
})
