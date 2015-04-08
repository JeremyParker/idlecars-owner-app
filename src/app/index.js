'use strict';
console.log('index.js')
angular.module('idlecars', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngMaterial', 'AppConfig'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
