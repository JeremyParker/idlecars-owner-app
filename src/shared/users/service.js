'use strict';

angular.module('idlecars')
.factory('UserService', function (Restangular) {
  var service = {};

  service.get = function () {
    if (service.user) { return service.user }
    service.user = Restangular.one('users', 'me').get();
    return service.user;
  }

  service.post = function (params) {
    return Restangular.all('users').post(params);
  }

  service.patch = function (patchData) {
    service.user = Restangular.one('users', 'me').patch(patchData);
    return service.user
  }

  service.requiredDocs = {
    email: {dislike: '', state: 'user.onboarding.email'},
    first_name: {dislike: '', state: 'user.onboarding.firstname'},
    last_name: {dislike: '', state: 'user.onboarding.lastname'},
  }

  return service;
})
