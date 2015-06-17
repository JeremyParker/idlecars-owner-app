'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('drivers.faq', {
      url: '/faq',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbar_main.controller',
        },
        'content@': {
          templateUrl: 'app/FAQ/faq.html',
          controller: 'faq.controller',
        },
      },
    })

})
