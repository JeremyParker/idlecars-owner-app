'use strict';

angular.module('idlecars')
.controller('navbarMain.controller', function ($scope, $rootScope, NavbarService, config) {
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

.controller('navbarField.controller', function ($scope, FieldService, NavbarService) {
  $scope.Field = FieldService;

  $scope.Navbar = NavbarService;
})

.controller('navbarAccount.controller', function ($scope, NavbarService) {
  $scope.goBack = function () {
    NavbarService.popState();
  }
})

.controller('navbarDocuments.controller', function ($scope, NavbarService, preDefine) {

  $scope.title = preDefine.title;
  $scope.enableBack = preDefine.enableBack;

  $scope.goBack = function () {
    NavbarService.popState();
  }
})
