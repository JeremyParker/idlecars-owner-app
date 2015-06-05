'use strict';

angular.module('idlecars')
.directive('navBar', function () {
  return {
    scope: {
      template: '='
    },
    template: '<div class="navbar-wrapper" ng-include="template"></div>',
    controller: 'navbar.controller',
  };
})
