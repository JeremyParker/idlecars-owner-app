'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http, CarService, $cookieStore) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  // check the browser cookies, show welcome text at first visit
  var first_time = $cookieStore.get('first_time');

  if (first_time == null) {
    $scope.modal_show = true;
    $cookieStore.put('first_time','no');
  }
  else {
    $scope.modal_show = false;
  }
});


