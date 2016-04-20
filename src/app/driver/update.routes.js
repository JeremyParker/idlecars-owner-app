'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('driver', {
      data: {requireAuth: true},
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
      },
    })

    .state('driver.update', {
      abstract: true,
      url: '/driver/update/:driverId',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
        },
      },
    })

    .state('driver.update.uploadAddressProof', {
      url: '/proof-of-address',
      data: {navbarInfo: {title: 'MVR (optional)', enableBack: true}},
      templateUrl: 'app/additions/upload.html',
      controller: 'driver.update.proofaddress.controller',
    })

    // .state('driver.update.success', {
    //   url: '/success',
    //   data: {navbarInfo: {title: 'Success', enableMenu: true}},
    //   templateUrl: 'shared/users/notice.html',
    //   controller: 'driver.update.success.controller',
    // })
})
