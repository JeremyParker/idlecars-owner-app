'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content': {
          templateUrl: 'app/cars/list.html',
          controller: 'cars.list.controller',
        },
      },
    })

    .state('cars.detail', {
      url: 'cars/:carId',
      params: {car: null},
      views: {
        'content@': {
          templateUrl: 'app/cars/detail.html',
          controller: 'cars.detail.controller',
        },
      },
    })

    .state('cars.detail.newBooking', {
      // TODO: mark this state as notInHistory
      data: {notInHistory: true, requireAuth: true},
      controller: 'cars.newBooking.controller',
      templateUrl: 'components/loading/full_screen_loading.html'
    })

    .state('cars.detail.renewal', {
      data: {notInHistory: true},
      url: '/renewals/:renewalId',
      views: {
        'content@': {
          templateUrl: 'app/cars/renewal.html',
          controller: 'renewal.showCtrl',
        },
      }
    })

});
