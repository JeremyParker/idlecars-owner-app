'use strict';

angular.module('idlecars')
.factory('CarService', function (Restangular) {
  var service = {};

  service.get = function () {
    return Restangular.all('cars').getList();
  }

  service.post = function (params, carId) {
    return Restangular.one('cars', carId).post(params);
  }

  service.patch = function (params, carId) {
    return Restangular.one('owners', carId).patch(params);
  }

  return service;
})
