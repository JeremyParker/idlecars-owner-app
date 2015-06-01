'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http, CarService, isRepeatVisitor) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  // check the browser cookies, show welcome text at first visit
  isRepeatVisitor.checkNow();
});
