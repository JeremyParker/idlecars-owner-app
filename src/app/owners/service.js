'use strict';

angular.module('idlecars')
.factory('MyOwnerService', function (Restangular) {
  var service = {};

  service.get = function () {
    if (service.owner) { return service.owner }
    service.owner = Restangular.one('owners', 'me').get();
    return service.owner;
  }

  service.post = function (params) {
    service.owner = Restangular.all('owners').post(params)
    return service.owner;
  }

  service.patch = function (params) {
    service.owner = Restangular.one('owners', 'me').patch(params);
    return service.owner;
  }

  service.requiredDocs = {
    zipcode: {dislike: '', state: 'ownerAccount.onboarding.zipcode'},
  }

  return service;
})
