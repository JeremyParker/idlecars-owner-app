'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'app/auth/login.html',
          controller: 'auth.login.controller'
        }
      }
    })

})
