'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('account', {
      url: '/account',
      views: {
        navbar: {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
      },
    })

    .state('account.upload', {
      controller: function() {
        console.log('heelo');
      }
    })

    .state('account.upload.driverLicense', {
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

    .state('account.upload.fhvLicense', {
      url: '/fhv-license',
      views: {
        'content@': {
          templateUrl: 'app/accounts/upload.html',
          controller: function($scope) {
            $scope.fileKey = 'hack_license_image';
          },
        }
      }
    });

});
