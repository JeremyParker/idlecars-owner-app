'use strict';

angular.module('idlecars')
.controller('newbooking.upload.controller', function ($scope) {

})

.controller('newbooking.driverlicense.controller', function ($scope) {

  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Driver License';
  $scope.skipShow = true;
})

.controller('newbooking.fhvlicense.controller', function ($scope) {

  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
  $scope.skipShow = true;
})

.controller('newbooking.defensivedriving.controller', function ($scope) {

  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
  $scope.skipShow = true;
})

.controller('newbooking.proofaddress.controller', function ($scope) {

  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
  $scope.skipShow = true;
})
