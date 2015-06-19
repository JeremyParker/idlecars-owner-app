'use strict';

angular.module('idlecars')
.factory('MyDriverService', function($q, DriverService) {
  var service = {};

  service.get = function() {
    if (service.driver) { return service.driver; }

    service.driver = DriverService.get({id: 'me'}).$promise;
    return service.driver;
  }

  return service;
});
