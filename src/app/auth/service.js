'use strict';

angular.module('idlecars')
.factory('MyAuthService', function (AuthService) {

  var service = {};

  var ownerLogin = function () {
    console.log('login')
  }

  var ownerLogout = function () {
    console.log('logout')
  }

  service.login = function(params) {
    return AuthService.login(params, ownerLogin)
  }

  service.logout = function () {
    AuthService.logout(ownerLogout)
  }

  return service;
})
