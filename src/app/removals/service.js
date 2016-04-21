'use strict';

angular.module('idlecars')
.factory('RemovalService', function ($stateParams, Restangular) {
  var service = {};

  service.removal = {};

  service.requiredDocs = {
  }

  service.get = function (removalId) {
    if (removalId) {
      if (!service.removal[removalId]) {
        service.removal[removalId] = Restangular.one('removals', removalId).get();
      };
      return service.removal[removalId];
    }
    if (!service.removals) {
      service.removals = Restangular.all('removals').getList();
    }
    return service.removals;
  }

  service.create = function (params) {
    var promise = Restangular.all('removals').post(params);
    return promise.then(function (removal) {
      service.removals = null;
      var removalId = removal.id;
      service.removal[removalId] = promise;
      return promise
    });
  }

  service.patch = function (removalId, params) {
    service.removals = null;
    service.removal[removalId] = Restangular.one('removals', removalId).patch(params);
    return service.removal[removalId];
  }

  service.currentDriverID = function () {
    return $stateParams.removalId;
  }

  service.clearCache = function () {
    service.removal = {};
    service.removals = null;
  }

  return service;
})
