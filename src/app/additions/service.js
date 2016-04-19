'use strict';

angular.module('idlecars')
.factory('AdditionService', function (Restangular) {
  var service = {};

  service.addition = {};

  service.requiredDocs = {
  }

  service.get = function (additionId) {
    if (additionId) {
      if (!service.addition[additionId]) {
        service.addition[additionId] = Restangular.one('additions', additionId).get();
      };
      return service.addition[additionId];
    }
    if (!service.additions) {
      service.additions = Restangular.all('additions').getList();
    }
    return service.additions;
  }

  service.create = function (params) {
    var promise = Restangular.all('additions').post(params);
    return promise.then(function (addition) {
      service.additions = null;
      var additionId = addition.id;
      service.addition[additionId] = promise;
      return promise
    });
  }

  service.patch = function (additionId, params) {
    service.additions = null;
    service.addition[additionId] = Restangular.one('additions', additionId).patch(params);
    return service.addition[additionId];
  }

  service.clearCache = function () {
    service.addition = {};
    service.additions = null;
  }

  return service;
})
