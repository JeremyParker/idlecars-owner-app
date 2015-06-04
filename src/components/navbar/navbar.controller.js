'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, NavbarService, config) {
  $scope.goBack = function() {
    if (NavbarService.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    NavbarService.popState();
  };
});
