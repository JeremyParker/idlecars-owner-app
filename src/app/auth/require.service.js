'use strict';

angular.module('idlecars')
.factory('RequireAuthService', function ($q, $state, $stateParams, AuthService) {
  var service = {};
  var destination = {};

  service.loginThenGo = function(toState, toParams) {
    destination.toState = toState;
    destination.toParams = toParams;

    service.resolve();
  }

  service.resolve = function() {
    if (AuthService.isLoggedIn()) {
      _goToDestination();
    } else {
      $state.go('login');
    }
  }

  var _goToDestination = function() {
    if (destination.toState) {
      $state.go(destination.toState, destination.toParams);
    } else {
      // NOTE: this shouldn't happen, but in case
      $state.go('cars');
    }
  }

  return service;
})
.run(function ($rootScope, RequireAuthService, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    if (toState.data && toState.data.requireAuth && !AuthService.isLoggedIn()) {
      event.preventDefault();
      RequireAuthService.loginThenGo(toState, toParams);
    }
  })
})
;
