'use strict';

angular.module('idlecars')

.factory('DocRouterService', function ($state, AdditionService) {
  var service = {};

  var _nextMissingDoc = function(addition) {
    for (var key in docOrder) {
      if (!addition[key]) {
        return docOrder[key];
      }
    }
    return null;
  }

  var docOrder = {
    driver_license_image: 'driverAccount.onboarding.uploadDriverLicense',
    fhv_license_image: 'driverAccount.onboarding.uploadFhvLicense',
    defensive_cert_image: 'driverAccount.onboarding.uploadDefensiveCert',
    // address_proof_image: 'driverAccount.onboarding.uploadAddressProof', <-- optional
  }

  service.requiredDocState = function() {
    return AdditionService.get().then(function(addition) {
      return _nextMissingDoc(addition);
    });
  }

  return service;
})
