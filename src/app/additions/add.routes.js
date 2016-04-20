'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('additions.add', {
      abstract: true,
      url: 'additions/add/:additionId',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'additions.add.controller',
        },
      },
    })

    .state('additions.add.phone_number', {
      url: '/phone_number',
      data: {navbarInfo: {title: 'Phone Number', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'additions.add.phone_number.controller',
    })

    .state('additions.add.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email address', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'additions.add.email.controller',
    })

    .state('additions.add.first_name', {
      url: '/first_name',
      data: {navbarInfo: {title: 'First Name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'additions.add.first_name.controller',
    })

    .state('additions.add.last_name', {
      url: '/last_name',
      data: {navbarInfo: {title: 'Last Name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'additions.add.last_name.controller',
    })

    .state('additions.add.uploadDriverLicense', {
      url: '/driver-license',
      templateUrl: 'app/additions/upload.html',
      controller: 'additions.add.driverlicense.controller',
    })

    .state('additions.add.uploadFhvLicense', {
      url: '/fhv-license',
      templateUrl: 'app/additions/upload.html',
      controller: 'additions.add.fhvlicense.controller',
    })

    .state('additions.add.uploadDefensiveCert', {
      url: '/defensive-driving-certificate',
      templateUrl: 'app/additions/upload.html',
      controller: 'additions.add.defensivedriving.controller',
    })

    .state('additions.add.uploadAddressProof', {
      url: '/proof-of-address',
      templateUrl: 'app/additions/upload.html',
      controller: 'additions.add.proofaddress.controller',
    })

    .state('additions.add.success', {
      url: '/success',
      data: {navbarInfo: {title: 'Success', enableMenu: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'additions.add.success.controller',
    })
})
