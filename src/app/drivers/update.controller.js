'use strict';

angular.module('idlecars')
.controller('driver.update.controller', function ($scope, $timeout, $rootScope, $state, MyDriverService) {
  $scope.showSkipLink = false;
  $scope.afterUploadSref = 'driverAccount';

  MyDriverService.get().then(function (me) {
    $scope.user = me;
  })

  $rootScope.navSave = function() {
    MyDriverService.patch($scope.$$childHead.user).then(function () {
      $state.go('driverAccount');
    })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }

  $scope.$on('$viewContentLoaded', function(){
    if ($scope.$$childHead.fieldForm) { $scope.validateForm(); };
  })
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
