'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('additions', {
      data: {requireAuth: true},
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        // 'content': {
        //   templateUrl: 'app/additions/additions.html',
        //   controller: 'additions.controller',
        // },
      },
    })

    .state('medallion', {
      url: '/medallion',
      data: {navbarInfo: {title: 'Medallion', enableBack: true, enableNext: true}},
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'shared/users/form.html',
          controller: 'medallion.controller',
        },
      },
    })
});
