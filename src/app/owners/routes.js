'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bankLink', {
      url: '/bank-link',
      data: {navbarInfo: {title: 'Link Bank Account', enableBack: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/owners/bank_link.html',
          controller: 'owners.bankLink.controller'
        }
      }
    })

})
