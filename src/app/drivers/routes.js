'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('driverAccount', {
      url: '/account',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbarAccount.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/account.html',
          controller: 'account.controller',
        }
      }
    })

    .state('driverAccount.uploadDriverLicense', {
      url: '/driver-license',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'driver_license_image';
          },
        }
      }
    })

    .state('driverAccount.uploadFhvLicense', {
      url: '/fhv-license',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'fhv_license_image';
          },
        }
      }
    })

})
