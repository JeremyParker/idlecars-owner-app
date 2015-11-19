'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bankLink', {
      url: '/bank-link',
      data: {navbarInfo: {title: 'Link Bank Account'}},
      views: {
        // TODO extend some base object, or have an `app` base state that holds the navbar
        'navbar@': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/owners/bank_link.html',
          controller: 'owners.bankLink.controller'
        }
      }
    })

    .state('bankSuccess', {
      url: '/bank_success',
      data: {navbarInfo: {title: ''}},
      views: {
        'navbar@': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/owners/success.html',
        },
      },
    })

})
