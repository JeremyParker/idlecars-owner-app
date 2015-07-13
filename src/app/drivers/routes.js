'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  var dlState = {
    url: '/driver-license',
    views: {
      'content@': {
        templateUrl: 'app/drivers/upload.html',
        controller: function($scope) {
          $scope.fieldName = 'driver_license_image';
          $scope.uploadTitle = 'your Driver License';
        },
      }
    }
  }


  var flState = {
    url: '/fhv-license',
    views: {
      'content@': {
        templateUrl: 'app/drivers/upload.html',
        controller: function($scope) {
          $scope.fieldName = 'fhv_license_image';
          $scope.uploadTitle = 'your Hack License';
        },
      }
    }
  }

  var ddState = {
    url: '/defensive-driving-certificate',
    views: {
      'content@': {
        templateUrl: 'app/drivers/upload.html',
        controller: function($scope) {
          $scope.fieldName = 'defensive_cert_image';
          $scope.uploadTitle = 'your Defensive Driving certificate';
        }
      }
    }
  }

  var paState = {
    url: '/proof-of-address',
    views: {
      'content@': {
        templateUrl: 'app/drivers/upload.html',
        controller: function($scope) {
          $scope.fieldName = 'address_proof_image';
          $scope.uploadTitle = 'a bill with your address on it';
        },
      }
    }
  }

  $stateProvider

    .state('driverAccount', {
      url: '/account',
      params: {
        goRequiredDocState: true
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

    .state('driverAccount.uploadDriverLicense', dlState)

    .state('driverAccount.uploadFhvLicense', flState)

    .state('driverAccount.uploadDefensiveCert', ddState)

    .state('driverAccount.uploadAddressProof', paState)

    .state('driverAccount.uploadDriverLicenseCopy', dlState)

    .state('driverAccount.uploadFhvLicenseCopy', flState)

    .state('driverAccount.uploadDefensiveCertCopy', ddState)

    .state('driverAccount.uploadAddressProofCopy', paState)
})
