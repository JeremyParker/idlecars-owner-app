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
          templateUrl: 'app/accounts/upload.html',
          controller: function($scope) {
            $scope.fileKey = 'driver_license_image';
          },
        }
      }
    })

    .state('driverAccount.uploadFhvLicense', {
      url: '/fhv-license',
      views: {
        'content@': {
          templateUrl: 'app/accounts/upload.html',
          controller: function($scope) {
            $scope.fileKey = 'fhv_license_image';
          },
        }
      }
    })


})
