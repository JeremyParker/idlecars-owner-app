'use strict';

angular.module('idlecars')
.factory('DocRouterService', function($state, MyDriverService) {
  var service = {};

  var docOrder = {
    driver_license_image: 'driverAccount.uploadDriverLicense',
    fhv_license_image: 'driverAccount.uploadFhvLicense',
  }

  service.goRequiredDoc = function() {
    MyDriverService.get().then(function(me) {
      for (var key in docOrder) {
        if (!me[key]) {
          $state.go(docOrder[key]);
          return;
        }
      }
    });
  }

  return service;
})
