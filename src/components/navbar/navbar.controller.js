'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, $location, $state, $previousState, config) {

  $scope.goBack = function() {
    if (_isAtRoot()) {
      window.location.replace(config.landing_page_url);
    } else if (_hasPrevState()) {
      $previousState.go()
    } else {
      $state.go('cars');
    }
  };

  var _isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  var _hasPrevState = function() {
    return !!$previousState.get();
  };
});
