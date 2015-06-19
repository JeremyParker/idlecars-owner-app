'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('drivers.faq', {
      url: '/faq',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/FAQ/driver_faq.html',
        },
      },
    })

    .state('owner_faq', {
      url: '/faq',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/FAQ/owner_faq.html',
        },
      },
    })

})
