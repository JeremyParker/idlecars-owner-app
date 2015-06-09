'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, historyState) {
  var factory = {};

  factory.popState = function() {
    historyState.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  return factory;
});
