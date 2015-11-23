'use strict';

angular.module('idlecars')
.factory('CarService', function (Restangular) {
  var service = {};

  service.get = function (carId) {
    if (carId) {
      return Restangular.one('cars', carId).get();
    }
    return Restangular.all('cars').getList();
  }

  service.create = function (params) {
    return Restangular.all('cars').post(params);
  }

  service.patch = function (carId, params) {
    return Restangular.one('cars', carId).patch(params);
  }

  return service;
})
