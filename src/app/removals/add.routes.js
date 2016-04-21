'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('removals.add', {
      abstract: true,
      url: 'removals/add/:removalId',
      views: {
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'removals.add.controller',
        },
      },
    })

    .state('removals.add.first_name', {
      url: '/first_name',
      data: {navbarInfo: {title: 'First Name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'removals.add.first_name.controller',
    })

    .state('removals.add.last_name', {
      url: '/last_name',
      data: {navbarInfo: {title: 'Last Name', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'removals.add.last_name.controller',
    })

    .state('removals.add.success', {
      url: '/success',
      data: {navbarInfo: {title: 'Success', enableMenu: true}},
      templateUrl: 'shared/users/notice.html',
      controller: 'removals.add.success.controller',
    })
})
