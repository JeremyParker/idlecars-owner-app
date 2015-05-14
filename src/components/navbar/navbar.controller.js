'use strict';

angular.module('idlecars')
  .controller('navbar.controller', function ($scope) {
    $scope.goBack = function() {
      window.history.back();
    }
  });
