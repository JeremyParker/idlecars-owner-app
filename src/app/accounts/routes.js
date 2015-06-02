'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('accountDetail', {
      url: '/account',
      templateUrl: 'app/accounts/detail.html',
    })

    .state('driverLicenseUpload', {
      url: '/account/driver-license',
      templateUrl: 'app/accounts/upload.html',
      controller: function($scope) {
        $scope.fileCategory = 'driver_license_image';
      },
    });

});
