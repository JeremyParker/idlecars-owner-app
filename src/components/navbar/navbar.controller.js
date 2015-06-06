'use strict';

angular.module('idlecars')
.controller('navbar_main.controller', function ($scope, NavbarService, config) {
  $scope.goBack = function() {
    if (NavbarService.isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    NavbarService.popState();
  };
})

.controller('navbar_field.controller', function ($scope, FieldService) {
  $scope.forward = function() {
    FieldService.index++;
  }

  $scope.backward = function() {
    FieldService.index--;
  }

  $scope.$watch(function() {return FieldService.isValid}, function() {
    $scope.isValid = FieldService.isValid;
  })
})
