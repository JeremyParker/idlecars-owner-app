'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, $rootScope, $location, $state, $previousState, config) {
  $rootScope.$on('$stateChangeStart', function() {
    $scope.menuOpen = false;
  });

  $scope.goBack = function() {
    if (_isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    _popState();
  };

  var _popState = function() {
    var popped = _prevOrDefault();
    $state.go(popped.state, popped.params).then(function() {
      $previousState.forget();
    });
  };

  var _isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  var _prevOrDefault = function() {
    return $previousState.get() || {state: 'cars'};
  };
});
