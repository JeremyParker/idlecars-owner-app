'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, $timeout, CarService, CarFilterService) {
  $timeout(function() {
    $scope.filters = CarFilterService.filters || {};
  });

  CarService.query().$promise.then(function(cars) {
    CarFilterService.allCars = cars;
    $scope.cars = CarFilterService.filterCars();
  });

  $scope.didFilter = function(feature, setting) {
    $scope.cars = CarFilterService.filter(feature, setting);
  }
})
