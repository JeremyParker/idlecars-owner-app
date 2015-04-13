'use strict';

angular.module('idlecars', ['ngAnimate', 'ngCookies', 'ui.router', 'ic.appConfig'])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

    .state('cars', {
      url: '/',
      templateUrl: 'app/cars/index.html',
      controller: 'cars.indexCtrl'
    })

    .state('carsShow', {
      url: 'cars/:carId',
      templateUrl: 'app/cars/show.html',
      params: {car: null},
      controller: 'cars.showCtrl'
    })

    .state('carsRequest', {
      url: 'cars/:carId/booking',
      templateUrl: 'app/cars/booking.html',
      params: {car: null},
      controller: 'cars.showCtrl'
    });

  $urlRouterProvider.otherwise('/');
})
;
