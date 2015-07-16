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
            $scope.user = {};
          },
          template: '<ui-view class="flex"/>',
        }
      },
    })

    .state('newUser.phoneNumber', {
      templateUrl: 'app/users/form.html',
      controller: 'newUser.phoneNumber.controller',
    })

    .state('newUser.password', {
      templateUrl: 'app/users/form.html',
      controller: 'newUser.password.controller',
    })

})
