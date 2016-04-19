'use strict';

angular.module('idlecars')
.factory('AppUserService', function ($state) {
  var service = {};

  service.emailEntered = function () {
    $state.go('^.firstname');
  }

  service.firstnameEntered = function () {
    $state.go('^.lastname');
  }

  service.lastnameEntered = function () {
    $state.go('ownerAccount.onboarding.social');
  }

  service.userUpdated = function () {
    $state.go('ownerAccount');
  }

  return service;
})
