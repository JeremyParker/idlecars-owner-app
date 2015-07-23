'use strict';

angular.module('idlecars')
.factory('CarFilterService', function() {
  var service = {
    allCars: [],
    costFilter: {},
  };

  service.filterCost = function(setting) {
    service.costFilter[setting] = !service.costFilter[setting];
    return service.filterCars();
  }

  service.filterCars = function() {
    if (!_anyFiltersOn()) { return service.allCars; }

    return service.allCars.filter(function(car) {
      return service.costFilter[car.cost_bucket];
    });
  }

  var _anyFiltersOn = function() {
    for (var key in service.costFilter) {
      if (service.costFilter[key]) { return true; }
    }
  }

  return service;
})
