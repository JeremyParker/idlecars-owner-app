'use strict';

angular.module('idlecars')
.controller('driver.update.controller', function ($scope, $rootScope, MyDriverService) {
  $scope.showSkipLink = false;
  $scope.afterUploadSref = 'driverAccount';

  MyDriverService.get().then(function (me) {
    $scope.user = me;
  })

  $rootScope.navSave = function() {
    console.log($scope.$$childHead)
    // MyDriverService.patch($scope.user).then(function () {
    //   $state.go('driverAccount')
    // })
  }

  $scope.validateForm = function() {
    console.log('message');
    $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid;
  }

})

.controller('driver.update.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.uploadTitle = 'your Driver License';
})

.controller('driver.update.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.uploadTitle = 'your Hack License';
})

.controller('driver.update.defensivedriving.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.uploadTitle = 'your Defensive Driving certificate';
})

.controller('driver.update.proofaddress.controller', function ($scope) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'a bill with your address on it';
})
