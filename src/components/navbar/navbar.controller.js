'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, $location, $state) {

  $scope.goBack = function() {
    if (_isAtRoot()) {
      window.location.replace('http://localhost:8000');
    } else {
      // TODO: replace with a history service that goes to the last state
      $state.go('cars');
    }
  };

  var _isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };
});
