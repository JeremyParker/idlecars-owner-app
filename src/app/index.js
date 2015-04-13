'use strict';

angular.module('idlecars', ['ngAnimate', 'ngCookies', 'ui.router', 'ic.appConfig'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('carIndex', {
        url: '/',
        templateUrl: 'app/cars/cars.html',
        controller: 'CarsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
