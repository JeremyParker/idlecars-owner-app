'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, $stateParams, HistoryService) {
  var factory = {};

  var navbarStateParams = {
    accountUpdate: {title: 'Driver Documents', enableBack: true}
  }

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    var navbarStateData = null;
    if ($state.current.data && $state.current.data.navbarInfo){
      navbarStateData = $state.current.data.navbarInfo;
    };
    return navbarStateParams[$stateParams.navbarType] || navbarStateData || {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
