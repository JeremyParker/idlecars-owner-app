'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars.update', {
      abstract: true,
      url: 'cars/update/:carId',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'cars.update.controller',
        },
      },
    })

    .state('cars.update.shift', {
      url: '/shift',
      data: {navbarInfo: {title: 'Shift', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.shift.controller',
    })

    .state('cars.update.description', {
      url: '/description',
      data: {navbarInfo: {title: 'Descrition', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.description.controller',
    })

    .state('cars.update.rent', {
      url: '/rent',
      data: {navbarInfo: {title: 'Weekly rent', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.rent.controller',
    })

    .state('cars.update.available', {
      url: '/available',
      data: {navbarInfo: {title: 'Available date', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'cars.update.available.controller',
    })

    .state('cars.update.deposit', {
      url: '/deposit',
      data: {navbarInfo: {title: 'Deposit', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.deposit.controller',
    })

    .state('cars.update.minimum', {
      url: '/minimum',
      data: {navbarInfo: {title: 'Minimum rental', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.minimum.controller',
    })

    .state('cars.update.mileage', {
      url: '/mileage',
      data: {navbarInfo: {title: 'Current mileage', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.mileage.controller',
    })

    .state('cars.update.exterior', {
      url: '/exterior',
      data: {navbarInfo: {title: 'Exterior color', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.exterior.controller',
    })

    .state('cars.update.interior', {
      url: '/interior',
      data: {navbarInfo: {title: 'Interior color', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'cars.update.interior.controller',
    })
});
