'use strict';

angular.module('idlecars')
.factory('MyDriverService', function(Restangular) {
  var service = {};

  service.get = function() {
    if (service.driver) { return service.driver; }

    service.driver = Restangular.one('drivers', 'me').get();
    return service.driver;
  }

  return service;
});
