'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, HistoryService) {
  var factory = {};

  var navbarInfo = {
    'bookingDetail': {title: 'Driver Documents', enableNext: true},
    'login': {title: 'Log in', enableBack: true},
    'driverAccount.uploadDriverLicense': {title: 'Driver Documents'},
    'driverAccount.uploadFhvLicense': {title: 'Driver Documents'},
    'driverAccount.uploadAddressProof': {title: 'Driver Documents'},
    'driverAccount.uploadDefensiveCert': {title: 'Driver Documents'}
  };

  var customNavbar;

  factory.setCustomNavbar = function (info) {
    customNavbar = info;
  };

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    var custom = customNavbar;
    customNavbar = null;
    return  custom || navbarInfo[$state.current.name] || {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
