'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, $previousState) {
  var factory = {};

  factory.popState = function() {
    var popped = _prevOrDefault();

    $state.go(popped.state, popped.params).then(function() {
      $previousState.forget();
    });
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  var _prevOrDefault = function() {
    return $previousState.get() || {state: 'cars'};
  };

  return factory;
});
