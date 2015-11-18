'use strict';

angular.module('idlecars')
.factory('MyOwnerService', function (Restangular) {
  var service = {};

  service.get = function () {
    return Restangular.one('owners', 'me').get();
  }

  return service;
})
