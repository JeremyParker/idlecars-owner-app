'use strict';

angular.module('idlecars')
  .controller('navbar.controller', function ($scope, $location) {
    $scope.goBack = function() {
      window.history.back();
    }
  });
