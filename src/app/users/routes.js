'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('newUser', {
      abstract: true,
      url: '/users/new',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_field.html',
          controller: 'navbarField.controller',
        },
        'content@': {
          controller: function($scope) {
            $scope.newUser = {};
          },
          template: '<ui-view/>',
        }
      },
    })

    .state('newUser.phoneNumber', {
      templateUrl: 'app/auth/user_form.html',
      controller: 'newUser.phoneNumber.controller',
    })

    .state('newUser.password', {
      templateUrl: 'app/auth/user_form.html',
      controller: 'newUser.password.controller',
    })

})
