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
    return service.allCars.filter(_doesMatchFilter);
  }

  var _doesMatchFilter = function(car) {
    for (var feature in service.filters) {
      if (!_doesMatchFeature(car, feature)) { return false; }
    }
    return true;
  }

  var _doesMatchFeature = function(car, feature) {
    console.log({
      _isAllBlank: _isAllBlank(feature),
      feature: feature,
    })
    if (_isAllBlank(feature)) { return true; }
    return service.filters[feature][car.searchable[feature]];
  }

  var _isAllBlank = function(feature) {
    if (!service.filters[feature]) { return true; }
    for (var setting in service.filters[feature]) {
      if (service.filters[feature][setting]) { return false; }
    }
    return true;
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
