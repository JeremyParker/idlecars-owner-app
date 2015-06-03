'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, navbarFunction, config) {
  $scope.goBack = function() {
    if (navbarFunction.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    navbarFunction.popState();
  };
});
