'use strict';

angular.module('idlecars')
.factory('MyDriverService', function(Restangular) {
  // TODO: is there a built in way for caching?

  var service = {};

  service.get = function() {
    if (service.driver) { return service.driver; }

    service.driver = Restangular.one('drivers', 'me').get();
    return service.driver;
  }

  service.patch = function(patchData) {
    var promise = service.get().then(function(me) {
      return me.patch(patchData);
    });

    promise.then(function() {
      service.driver = promise;
    });

    return promise;
  }

  return service;
});
