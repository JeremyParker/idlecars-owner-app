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

    .state('ownerAccount.update.address', {
      url: '/address',
      data: {navbarInfo: {title: 'Address', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.update.address.controller',
    })

    .state('ownerAccount.update.apartment', {
      url: '/apartment',
      data: {navbarInfo: {title: 'Apartment', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.update.apartment.controller',
    })

    .state('ownerAccount.update.city', {
      url: '/city',
      data: {navbarInfo: {title: 'City', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.update.city.controller',
    })

    .state('ownerAccount.update.zipcode', {
      url: '/zipcode',
      data: {navbarInfo: {title: 'Zip code', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'owner.update.zipcode.controller',
    })

})
