'use strict';

angular.module('idlecars')
.factory('MyOwnerService', function (Restangular) {
  var service = {};

  service.get = function () {
    return Restangular.one('owners', 'me').get();
  }

  service.post = function (params) {
    return Restangular.all('owners').post(params)
  }

  service.patch = function (params) {
    return Restangular.one('owners', 'me').patch(params);
  }

  service.requiredDocs = {
    email: {dislike: '', state: 'user.onboarding.email'},
    first_name: {dislike: '', state: 'user.onboarding.firstname'},
    last_name: {dislike: '', state: 'user.onboarding.lastname'},
  }

  return service;
})
