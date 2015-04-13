'use strict';

angular.module('idlecars', ['ngAnimate', 'ngCookies', 'ui.router', 'ic.appConfig'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

      .state('carIndex', {
        url: '/',
        templateUrl: 'app/cars/index.html',
        controller: 'CarsCtrl'
      })

      .state('carDetail', {
        url: 'car/:carId',
        templateUrl: 'app/cars/show.html',
        params: {car: null},
        controller: function ($scope, $stateParams) {
          $scope.car = $stateParams.car;
        }
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
;
