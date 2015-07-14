'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, $stateParams, HistoryService) {
  var factory = {};

  var navbarStateParams = {
    accountUpdateDriverLicense: {title: 'Driver License', enableBack: true},
    accountUpdateFhvLicense: {title: 'Hack License', enableBack: true},
    accountUpdateDefensiveCert: {title: 'Defensive Driving', enableBack: true},
    accountUpdateAddressProof: {title: 'Proof of Address', enableBack: true}
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
    if ($state.current.data){
      navbarStateData = $state.current.data.navbarInfo;
    };
    return navbarStateParams[$stateParams.navbarType] || navbarStateData || {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
