'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      params: {username: null},
      data: {navbarInfo: {title: 'Log in', enableBack: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/auth/login.html',
          controller: 'auth.login.controller',
        }
      }
    })

    .state('forgotPassword', {
      url: '/forgot_password',
      data: {navbarInfo: {title: 'I forgot my password', enableBack: true, enableNext: true}},
      params: {phone_number: null},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/users/form.html',
          controller: 'auth.forgotPassword.controller',
        }
      }
    })

    .state('resetPassword', {
      url: '/reset_password/:resetToken',
      data: {navbarInfo: {title: 'Reset password', enableBack: false, enableSave: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/users/form.html',
          controller: 'auth.resetPassword.controller',
        }
      }
    })
})
