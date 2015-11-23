'use strict';

angular.module('idlecars')
.factory('CarService', function (Restangular) {
  var service = {};

  service.get = function () {
    return Restangular.all('cars').getList();
  }

  service.create = function (params) {
    return Restangular.all('cars').post(params);
  }

  service.post = function (carId, params) {
    return Restangular.one('cars', carId).post(params);
  }

  service.patch = function (carId, params) {
    return Restangular.one('cars', carId).patch(params);
  }

  return service;
})
