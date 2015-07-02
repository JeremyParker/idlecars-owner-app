'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('auth', {
      abstract: true,
      controller: 'auth.controller',
    })

    .state('auth.require', {
      controller: 'auth.require.controller',
    })

    .state('login', {
      url: '/login',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/auth/login.html',
          controller: 'auth.login.controller'
        }
      }
    })

})
