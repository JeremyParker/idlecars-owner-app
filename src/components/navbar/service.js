'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, $stateParams, HistoryService) {
  var factory = {};

  var navbarInfo = {
    'bookingDetail': {title: 'Driver Documents', enableNext: true},
    'login': {title: 'Log in', enableBack: true},
    'driverAccount.uploadDriverLicense': {title: 'Driver Documents'},
    'driverAccount.uploadFhvLicense': {title: 'Driver Documents'},
    'driverAccount.uploadAddressProof': {title: 'Driver Documents'},
    'driverAccount.uploadDefensiveCert': {title: 'Driver Documents'}
  };

  var navbarStateParams = {
    navbar1: {title: 'Driver Documents', enableBack: true}
  }

  var setCustomNavbar;

  factory.setCustomNavbar = function (info) {
    setCustomNavbar = info;
  };

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    var setCustom = setCustomNavbar;
    setCustomNavbar = null;
    return  setCustom || navbarStateParams[$stateParams.navbarType] || navbarInfo[$state.current.name] || {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
