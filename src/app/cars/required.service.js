'use strict';

angular.module('idlecars')
.factory('CarRequiredService', function (CarService) {
  var service = {};

  var _nextMissingDoc = function (cars) {
    for (var key in docOrder) {
      if (!cars[key] || cars[key] == docOrder[key].dislike) {
        return docOrder[key].state;
      }
    }
    return null;
  }

  var docOrder = {
    solo_cost: {dislike: '', state: 'cars.add.rent'},
    solo_deposit: {dislike: '', state: 'cars.add.deposit'},
    min_lease: {dislike: '_00_unknown', state: 'cars.add.minimum'},
    exterior_color: {dislike: '', state: 'cars.add.exterior'},
    interior_color: {dislike: '', state: 'cars.add.interior'},
  }

  service.requiredDocState = function(cars) {
    if (!cars) {
      return CarService.get().then(function (cars) {
        return _nextMissingDoc(cars);
      })
    }
    else {
      return _nextMissingDoc(cars);
    }
  }

  return service;
})
