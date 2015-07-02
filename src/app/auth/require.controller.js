'use strict';

angular.module('idlecars')
.controller('auth.require.controller', function ($q, AuthService) {
  if (AuthService.isLoggedIn()) {}
});
