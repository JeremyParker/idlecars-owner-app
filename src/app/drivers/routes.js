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

    .state('driverAccount.newBooking', {
      abstract: true,
      url: '/new-booking',
      data: {navbarInfo: {title: 'Driver Documents'}},
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'newbooking.upload.controller',
        }
      }
    })

    .state('driverAccount.newBooking.uploadDriverLicense', {
      url: '/driver-license',
      templateUrl: 'app/drivers/upload.html',
      controller: 'newbooking.driverlicense.controller',
    })

    .state('driverAccount.newBooking.uploadFhvLicense', {
      url: '/fhv-license',
      templateUrl: 'app/drivers/upload.html',
      controller: 'newbooking.fhvlicense.controller',
    })

    .state('driverAccount.newBooking.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      templateUrl: 'app/drivers/upload.html',
      controller: 'newbooking.defensivedriving.controller',
    })

    .state('driverAccount.newBooking.uploadAddressProof', {
      url: '/proof-of-address',
      templateUrl: 'app/drivers/upload.html',
      controller: 'newbooking.proofaddress.controller',
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
