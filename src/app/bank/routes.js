'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('ownerAccount.bankLink', {
      url: '/bank-link',
      data: {navbarInfo: {title: 'Link Bank Account', enableBack: true}},
      views: {
        'content@': {
          templateUrl: 'app/owners/bank_link.html',
          controller: 'owners.bankLink.controller'
        }
      }
    })

})
