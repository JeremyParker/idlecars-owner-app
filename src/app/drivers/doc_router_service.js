'use strict';

angular.module('idlecars')
.factory('DocRouterService', function(MyDriverService) {
  var service = {};

  var _nextMissingDoc = function(me) {
    for (var key in docOrder) {
      if (!me[key]) {
        return docOrder[key];
      }
    }
    return null;
  }

  var docOrder = {
    driver_license_image: 'driverAccount.uploadDriverLicense',
    fhv_license_image: 'driverAccount.uploadFhvLicense',
    address_proof_image: 'driverAccount.uploadAddressProof',
    defensive_cert_image: 'driverAccount.uploadDefensiveCert',
  }

  service.requiredDocState = function() {
    MyDriverService.get().then(function(me) {
      return _nextMissingDoc(me);
    });
  }

  return service;
})
