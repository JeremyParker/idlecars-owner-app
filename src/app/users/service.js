'use strict';

angular.module('idlecars')
.factory('AppUserService', function ($state, UserService, MyOwnerService, RequireAuthService) {
  var service = {};

  service.emailEntered = function (newUser) {
    UserService.patch(newUser).then(RequireAuthService.resolve)
  }

  service.userUpdated = function (newUser) {
    MyOwnerService.patch(newUser).then(function () {
      $state.go('ownerAccount');
    })
  }

  return service;
})
