'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('drivers', {
      url: '/drivers'
    })

    .state('drivers.account', {
      url: '/account',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbar_account.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/account.html',
          controller: 'account.controller',
        }
      }
    })

    .state('drivers.login', {
      url: '/login',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_account.html',
          controller: 'navbar_account.controller',
        },
        'content@': {
          templateUrl: 'app/drivers/login.html',
        }
      }
    })

})
