'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('removals', {
      data: {requireAuth: true},
      url: '/removals',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
      },
    })

    .state('hackLicense', {
      url: '/hack_license',
      data: {navbarInfo: {title: 'Hack License', enableBack: true, enableNext: true}},
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'shared/users/form.html',
          controller: 'hackLicense.controller',
        },
      },
    })
});
