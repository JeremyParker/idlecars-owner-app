'use strict';

angular.module('idlecars')
.factory('DocRouterService', function($state, MyDriverService) {
  var service = {};

  var _nextMissingDoc = function(me) {
    for (var key in docOrder) {
      if (!me[key]) {
        return docOrder[key];
      }
    }
  }

  var docOrder = {
    driver_license_image: 'driverAccount.uploadDriverLicense',
    fhv_license_image: 'driverAccount.uploadFhvLicense',
    address_proof_image: 'driverAccount.uploadAddressProof',
    defensive_cert_image: 'driverAccount.uploadDefensiveCert',
  }

  service.goRequiredDoc = function() {
    MyDriverService.get().then(function(me) {
      $state.go(_nextMissingDoc(me) || 'bookingSuccess');
    });
  }

  return service;
})
