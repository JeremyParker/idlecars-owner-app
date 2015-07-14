'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('driverAccount', {
      url: '/account',
      params: {
        goRequiredDocState: true,
        navbarType: null
      },
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/account.html',
          controller: 'account.controller',
        }
      }
    })

    .state('driverAccount.uploadDriverLicense', {
      url: '/driver-license',
      data: {navbarInfo: {title: 'Driver Documents'}},
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'driver_license_image';
            $scope.uploadTitle = 'your Driver License';
          },
        }
      }
    })

    .state('driverAccount.uploadFhvLicense', {
      url: '/fhv-license',
      data: {navbarInfo: {title: 'Driver Documents'}},
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'fhv_license_image';
            $scope.uploadTitle = 'your Hack License';
          },
        }
      }
    })

    .state('driverAccount.uploadAddressProof', {
      url: '/proof-of-address',
      data: {navbarInfo: {title: 'Driver Documents'}},
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'address_proof_image';
            $scope.uploadTitle = 'a bill with your address on it';
          },
        }
      }
    })

    .state('driverAccount.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      views: {
        'content@': {
          templateUrl: 'app/drivers/upload.html',
          controller: function($scope) {
            $scope.fieldName = 'defensive_cert_image';
            $scope.uploadTitle = 'your Defensive Driving certificate';
          },
        }
      }
    })
})
