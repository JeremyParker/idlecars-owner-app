'use strict';

angular.module('idlecars')
.factory('RequireAuthService', function ($q, AuthService) {
  var service = {};

  var authProcess = $q.defer();

  service.go = function() {
    // if (AuthService.isLoggedIn()) {
      authProcess.resolve();
    // } else {
      //
    // }
    return authProcess.promise;
  }

  return service;
});
