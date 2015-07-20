'use strict';

angular.module('idlecars')
.controller('cars.list.controller', function ($scope, CarService) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  $scope.setCostBucket = function(newBucket) {
    if ($scope.costBucket === newBucket) {
      $scope.costBucket = undefined;
    } else {
      $scope.costBucket = newBucket;
    }
  }
})
