'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      data: {requireAuth: true},
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content': {
          templateUrl: 'app/cars/cars.html',
          controller: 'cars.controller',
        },
      },
    })

    .state('cars.add', {
      abstract: true,
      url: 'cars/add',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'cars.add.controller',
        },
      },
    })

    .state('cars.add.plate', {
      url: '/plate',
      data: {navbarInfo: {title: 'TLC plate', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.plate.controller',
    })

    .state('cars.add.confirm', {
      url: '/confirm',
      data: {navbarInfo: {title: '', enableBack: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'cars.add.confirm.controller',
    })

    .state('cars.add.rent', {
      url: '/rent',
      data: {navbarInfo: {title: 'Weekly rent', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.rent.controller',
    })

    .state('cars.add.available', {
      url: '/available',
      data: {navbarInfo: {title: 'Available date', enableBack: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'cars.add.available.controller',
    })

    .state('cars.add.deposit', {
      url: '/deposit',
      data: {navbarInfo: {title: 'Deposit', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.deposit.controller',
    })

    .state('cars.add.minimum', {
      url: '/minimum',
      data: {navbarInfo: {title: 'Minimum rental', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.minimum.controller',
    })

    .state('cars.add.mileage', {
      url: '/mileage',
      data: {navbarInfo: {title: 'Current mileage', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.mileage.controller',
    })

    .state('cars.add.exterior', {
      url: '/exterior',
      data: {navbarInfo: {title: 'Exterior color', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.exterior.controller',
    })

    .state('cars.add.interior', {
      url: '/interior',
      data: {navbarInfo: {title: 'Interior color', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.add.interior.controller',
    })

    .state('cars.add.success', {
      url: '/success',
      data: {navbarInfo: {title: 'Success', enableMenu: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'cars.add.success.controller',
    })
});
