'use strict';

angular.module('idlecars')
.factory('AppAuthService', function ($state, UserService) {
  var service = {};

  // TODO: hook up the real page instead of console.log
  service.loggedin = function () {
    console.log('logged in')
  }

  // TODO: hook up the real page instead of console.log
  service.loggedout = function () {
    console.log('logged out')
  }

  service.accountCreated = function () {
    $state.go('^.email');
  }

  service.passwordChanged = function () {
    $state.go('ownerAccount');
  }

  service.passwordReset = function () {
    $state.go('ownerAccount');
  }

  // TODO: get rid of the this temporary solution
  service.saveUser = function (user) {
    return UserService.post(user)
  }

  return service;
})
