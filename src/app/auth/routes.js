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

    .state('resetPassword', {
      url: '/reset_password/:resetToken',
      params: {token: null},
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
