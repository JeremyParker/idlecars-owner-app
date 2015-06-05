'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, NavbarService, config, FieldService) {
  $scope.goBack = function() {
    if (NavbarService.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    NavbarService.popState();
  };

  $scope.forward = function() {
    FieldService.index++;
  }

  $scope.backward = function() {
    FieldService.index--;
  }

  $scope.$watch(function() {return FieldService.isValid}, function() {
    $scope.isValid = FieldService.isValid;
  })

});
