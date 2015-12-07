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
    {key: '_01_no_min', value: '1 day'},
    {key: '_02_one_week', value: '7 days'},
    {key: '_03_two_weeks', value: '14 days'},
    {key: '_04_three_weeks', value: '21 days'},
    {key: '_05_one_month', value: '30 days'},
  ];

  service.requiredDocs = {
    solo_cost: {dislike: '', state: 'cars.add.rent'},
    solo_deposit: {dislike: '', state: 'cars.add.deposit'},
    min_lease: {dislike: '_00_unknown', state: 'cars.add.minimum'},
    exterior_color: {dislike: '', state: 'cars.add.exterior'},
    interior_color: {dislike: '', state: 'cars.add.interior'},
  }

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

  service.renew = function (carId) {
    return Restangular.one('cars', carId).all('extension').post('');
  }

  return service;
})
