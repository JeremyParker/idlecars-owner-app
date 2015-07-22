'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, CarService) {
  $scope.costFilter = {};
  var _allCars = [];

  CarService.query().$promise.then(function(cars) {
    _allCars = cars;
    _filterCars();
  });

  $scope.didFilterCost = function(setting) {
    $scope.costFilter[setting] = !$scope.costFilter[setting];
    _filterCars();
  }

  var _filterCars = function() {
    if (!_anyFiltersOn()) { return $scope.cars = _allCars; }

    $scope.cars = _allCars.filter(function(car) {
      return $scope.costFilter[car.cost_bucket];
    });
  }

  var _anyFiltersOn = function() {
    for (var key in $scope.costFilter) {
      if ($scope.costFilter[key]) { return true; }
    }
  }
})
