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
      templateUrl: 'app/cars/confirm.html',
      controller: 'cars.add.confirm.controller',
    })

});
