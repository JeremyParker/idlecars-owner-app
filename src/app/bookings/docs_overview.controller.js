'use strict';

angular.module('idlecars')
.controller('docsOverview.controller', function ($scope, $state, MyDriverService, DocRouterService) {
  DocRouterService.requiredDocState().then(function(nextState) {
    if (nextState) {
      $state.go(nextState);
    }
  });

  MyDriverService.get().then(function(me) {
    $scope.driverDocuments = [
      {title: 'Driver License', isUploaded: me.driver_license_image},
      {title: 'FHV License', isUploaded: me.fhv_license_image},
      {title: 'Defensive Driving', isUploaded: me.defensive_cert_image},
      {title: 'Proof of Address', isUploaded: me.address_proof_image},
    ];
  })
})
