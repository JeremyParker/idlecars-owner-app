'use strict';

angular.module('idlecars')
.factory('CarFilterService', function() {
  var service = {
    allCars: [],
    filters: {},
  };

  service.filter = function(feature, setting) {
    if (!service.filters[feature]) { service.filters[feature] = {}; }

    service.filters[feature][setting] = !service.filters[feature][setting];
    _toggleBodyType(feature, setting);
    return service.filterCars();
  }

  service.filterCars = function() {
    if (!_anyFiltersOn()) { return service.allCars; }
    return service.allCars.filter(_matchesAnyFilter);
  }

  var _matchesAnyFilter = function(car) {
    for (var feature in car.searchable) {
      var feature_filter = service.filters[feature];
      if (feature_filter && feature_filter[car.searchable[feature]]) { return true; }
    }
    return false;
  }

  var _anyFiltersOn = function() {
    for (var feature in service.filters) {
      for (var setting in service.filters[feature]) {
        if (service.filters[feature][setting]) { return true; }
      }
    }
  }

  var _toggleBodyType = function(feature, bodyType) {
    if (feature !== 'body_type') { return }
    if (bodyType === 'Sedan') {
      service.filters.body_type.SUV = false
    }
    if (bodyType === 'SUV') {
      service.filters.body_type.Sedan = false
    }
  }

  return service;
})
