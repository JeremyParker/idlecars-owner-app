'use strict';

angular.module('idlecars')
.controller('onboarding.upload.controller', function ($scope) {
  $scope.showSkipLink = true;
})

.controller('onboarding.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Driver License';
})

.controller('onboarding.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
})

.controller('onboarding.defensivedriving.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
})

.controller('onboarding.proofaddress.controller', function ($scope) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
})
