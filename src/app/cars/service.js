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
    {key: '_00_unknown', value: 'Unknown'},
    {key: '_01_no_min', value: 'No'},
    {key: '_02_one_week', value: '7 days'},
    {key: '_03_two_weeks', value: '14 days'},
    {key: '_04_three_weeks', value: '21 days'},
    {key: '_05_one_month', value: '30 days'},
    {key: '_06_six_weeks', value: '45 days'},
    {key: '_07_two_months', value: '60 days'},
    {key: '_08_three_months', value: '90 days'},
    {key: '_09_four_months', value: '120 days'},
    {key: '_10_five_months', value: '150 days'},
    {key: '_11_six_months', value: '180 days'},
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
