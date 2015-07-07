'use strict';

angular.module('idlecars')
.factory('RequireAuthService', function ($q, $state, AuthService) {
  var service = {};

  var authProcess = $q.defer();

  service.go = function() {
    if (AuthService.isLoggedIn()) {
      authProcess.resolve();
    } else {
      $state.go('login');
    }
    return authProcess.promise;
  }

  service.resolve = function() {
    authProcess.resolve();
  }

  return service;
});
