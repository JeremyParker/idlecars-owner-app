'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('ownerAccount', {
      url: '/account',
      data: {requireAuth: true},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/owners/account.html',
          controller: 'account.controller',
        }
      }
    })

    .state('ownerAccount.onboarding', {
      abstract: true,
      url: '/onboarding',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'owner.onboarding.controller',
        }
      }
    })

    .state('ownerAccount.onboarding.company', {
      url: '/company',
      data: {navbarInfo: {title: 'Company name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.onboarding.company.controller',
    })

    .state('ownerAccount.onboarding.zipcode', {
      url: '/zipcode',
      data: {navbarInfo: {title: 'Zip code', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.onboarding.zipcode.controller',
    })

    .state('ownerAccount.update', {
      abstract: true,
      url: '/update',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'owner.update.controller',
        }
      }
    })

    .state('ownerAccount.update.company', {
      url: '/company',
      data: {navbarInfo: {title: 'Company name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.update.company.controller',
    })

    .state('ownerAccount.update.zipcode', {
      url: '/zipcode',
      data: {navbarInfo: {title: 'Zip code', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.update.zipcode.controller',
    })

})
