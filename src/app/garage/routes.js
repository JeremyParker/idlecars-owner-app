'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      data: {requireAuth: true},
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content': {
          templateUrl: 'app/garage/cars.html',
          controller: 'cars.controller',
        },
      },
    })

});
