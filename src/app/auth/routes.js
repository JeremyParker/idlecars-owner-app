'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      data: {navbarInfo: {title: 'Log in', enableBack: true}},
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
