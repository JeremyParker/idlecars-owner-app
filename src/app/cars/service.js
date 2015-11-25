'use strict';

angular.module('idlecars')
.factory('CarService', function (Restangular) {
  var service = {};

  service.colors = [
    {key: 'black', value: 'Black'},
    {key: 'charcoal', value: 'Charcoal'},
    {key: 'grey', value: 'Grey'},
    {key: 'dark blue', value: 'Dark Blue'},
    {key: 'blue', value: 'Blue'},
    {key: 'tan', value: 'Tan'},
    {key: 'white', value: 'White'},
  ];

  service.minimum_lease = [
    {key: '_01_no_min', value: 'No minimum'},
    {key: '_02_one_week', value: 'One week'},
    {key: '_03_two_weeks', value: 'Two weeks'},
    {key: '_04_three_weeks', value: 'Three weeks'},
    {key: '_05_one_month', value: 'One month'},
  ];

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
