'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, HistoryService) {
  var factory = {};

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  return factory;
});
