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
          templateUrl: 'app/cars/index.html',
          controller: 'cars.indexCtrl',
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
      controller: 'cars.newBooking.controller',
      templateUrl: 'components/loading/full_screen_loading.html',
      data: {requireAuth: true},
      onExit: function (HistoryService) {
        HistoryService.forget();
      }
    })

    .state('cars.detail.renewal', {
      url: '/renewals/:renewalId',
      views: {
        'content@': {
          templateUrl: 'app/cars/renewal.html',
          controller: 'renewal.showCtrl',
        },
      },
      onExit: function (HistoryService) {
        HistoryService.forget();
      }
    })

});
