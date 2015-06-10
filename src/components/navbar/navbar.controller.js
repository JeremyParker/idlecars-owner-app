'use strict';

angular.module('idlecars')
.controller('navbar_main.controller', function ($scope, $rootScope, NavbarService, config) {
  $rootScope.$on('$stateChangeStart', function() {
    $scope.menuOpen = false;
  });

  $scope.goBack = function() {
    if (NavbarService.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    NavbarService.popState();
  };
})

.controller('navbar_field.controller', function ($scope, FieldService, NavbarService) {
  $scope.Field = FieldService;

  $scope.Navbar = NavbarService;
})

.controller('navbar_settings.controller', function () {

})
