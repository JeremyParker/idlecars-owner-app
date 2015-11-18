'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('ownerAccount', {
      url: '/account',
      data: {requireAuth: true},
      views: {
        'navbar@': {
          templateUrl: 'shared/components/navbar/navbar_main.html',
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

    .state('ownerAccount.onboarding.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableNext: true}},
      views: {
        'content@': {
          controller: 'owner.onboarding.email.controller',
          templateUrl: 'shared/users/form.html',
        }
      },
    })

    .state('ownerAccount.update', {
      abstract: true,
      url: '/update',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'update.controller',
        }
      }
    })

    .state('ownerAccount.update.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'update.email.controller',
    })

    .state('ownerAccount.update.firstname', {
      url: '/firstname',
      data: {navbarInfo: {title: 'First name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'update.firstname.controller',
    })

    .state('ownerAccount.update.lastname', {
      url: '/lastname',
      data: {navbarInfo: {title: 'Last name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'update.lastname.controller',
    })

    .state('ownerAccount.update.phonenumber', {
      url: '/phonenumber',
      data: {navbarInfo: {title: 'Phone number', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'update.phoneNumber.controller',
    })

})
