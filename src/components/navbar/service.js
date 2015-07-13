'use strict';

angular.module('idlecars')
.factory('NavbarService', function ($location, $state, HistoryService) {
  var factory = {};

  var navbarInfo = {
    'bookingDetail': {title: 'Driver Documents', enableBack: false, enableNext: true},
    'login': {title: 'Log in', enableBack: true, enableNext: false},
    'driverAccount': {title: 'Account', enableBack: false, enableNext: true},
    'driverAccount.uploadDriverLicense': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadFhvLicense': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadAddressProof': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadDefensiveCert': {title: 'Driver Documents', enableBack: false, enableNext: false},
    'driverAccount.uploadDriverLicenseCopy': {title: 'Driver Documents', enableBack: true, enableNext: false},
    'driverAccount.uploadFhvLicenseCopy': {title: 'Driver Documents', enableBack: true, enableNext: false},
    'driverAccount.uploadAddressProofCopy': {title: 'Driver Documents', enableBack: true, enableNext: false},
    'driverAccount.uploadDefensiveCertCopy': {title: 'Driver Documents', enableBack: true, enableNext: false}
  };

  factory.popState = function() {
    HistoryService.goPreviousState();
  };

  factory.isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  factory.getNavbarInfo = function () {
    return navbarInfo[$state.current.name] || {title: '', enableBack: true, enableNext: true};
  }

  return factory;
});
