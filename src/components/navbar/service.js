'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, $rootScope, $timeout, HistoryService) {
  var factory = {};

  var navbarInfo = [
    {state: 'cars.bookingsShow', title: 'Driver Documents', enableBack: false, enableNext: true}
  ];

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    for (var i = 0; i < navbarInfo.length; i++) {
      if (navbarInfo[i].state === $state.current.name) {
        return navbarInfo[i];
      }
    };
    return {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
