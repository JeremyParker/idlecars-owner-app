'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http, Car) {
  Car.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });
});
