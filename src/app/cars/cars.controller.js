'use strict';

angular.module('idlecars')
.controller('cars.controller', function ($scope, CarService) {

  CarService.get().then(function (cars) {
    console.log(cars)
  })

})
