'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('driverAccount', {
      url: '/account',
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

    .state('driverAccount.onboarding', {
      abstract: true,
      url: '/onboarding',
      data: {navbarInfo: {title: 'Driver Documents'}},
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'onboarding.upload.controller',
        }
      }
    })

    .state('driverAccount.onboarding.uploadDriverLicense', {
      url: '/driver-license',
      templateUrl: 'app/drivers/upload.html',
      controller: 'onboarding.driverlicense.controller',
    })

    .state('driverAccount.onboarding.uploadFhvLicense', {
      url: '/fhv-license',
      templateUrl: 'app/drivers/upload.html',
      controller: 'onboarding.fhvlicense.controller',
    })

    .state('driverAccount.onboarding.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      templateUrl: 'app/drivers/upload.html',
      controller: 'onboarding.defensivedriving.controller',
    })

    .state('driverAccount.onboarding.uploadAddressProof', {
      url: '/proof-of-address',
      templateUrl: 'app/drivers/upload.html',
      controller: 'onboarding.proofaddress.controller',
    })

    .state('driverAccount.update', {
      abstract: true,
      url: '/update',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'update.upload.controller',
        }
      }
    })

    .state('driverAccount.update.uploadDriverLicense', {
      url: '/driver-license',
      data: {navbarInfo: {title: 'Driver License', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'update.driverlicense.controller',
    })

    .state('driverAccount.update.uploadFhvLicense', {
      url: '/fhv-license',
      data: {navbarInfo: {title: 'Hack License', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'update.fhvlicense.controller',
    })

    .state('driverAccount.update.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      data: {navbarInfo: {title: 'Defensive Driving', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'update.defensivedriving.controller',
    })

    .state('driverAccount.update.uploadAddressProof', {
      url: '/proof-of-address',
      data: {navbarInfo: {title: 'Proof of Address', enableBack: true}},
      templateUrl: 'app/drivers/upload.html',
      controller: 'update.proofaddress.controller',
    })
})
