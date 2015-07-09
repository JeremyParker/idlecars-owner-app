'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('newUser', {
      abstract: true,
      url: '/users/new',
      controller: function($scope, $rootScope) {
        $scope.newUser = {};
        $rootScope.navNextSref = 'login';
      },
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_field.html',
          controller: 'navbarField.controller',
        },
      },
    })

    .state('newUser.phoneNumber', {
      views: {
        'content@': {
          templateUrl: 'app/auth/user_form.html',
          controller: 'newUser.phoneNumber.controller',
        },
      },
    })

})
