'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('ownerAccount.bankLink', {
      url: '/bank-link',
      data: {navbarInfo: {title: 'Link Bank Account', enableBack: true, enableMenu: true}},
      views: {
        'content@': {
          templateUrl: 'app/bank/bank_link.html',
          controller: 'owners.bankLink.controller'
        }
      }
    })

    .state('ownerAccount.bankSuccess', {
      url: '/bank_success',
      data: {navbarInfo: {title: ''}},
      views: {
        'content@': {
          templateUrl: 'app/bank/success.html',
        },
      },
    })

})
