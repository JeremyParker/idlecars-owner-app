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

    .state('cars.detail', {
      url: 'cars/:carId',
      views: {
        'content@': {
          templateUrl: 'app/cars/detail.html',
          controller: 'cars.detail.controller',
        },
      },
    })

    .state('plate', {
      url: '/plate',
      data: {navbarInfo: {title: 'Medallion', enableBack: true, enableNext: true}},
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'shared/users/form.html',
          controller: 'plate.controller',
        },
      },
    })
});
