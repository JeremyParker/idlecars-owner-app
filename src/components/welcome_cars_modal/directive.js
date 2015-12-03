'use strict';

angular.module('idlecars')
.directive('welcomeCarsModal', function () {
  return {
    scope: {},
    templateUrl: 'components/welcome_cars_modal/template.html',
    controller: function ($scope, $localStorage) {
      $scope.welcomeCarsModalOn = !$localStorage.welcomeCarsModalClosed;

      $scope.closeCarsModal = function () {
        $scope.welcomeCarsModalOn = false;
        $localStorage.welcomeCarsModalClosed = true;
      }
    }
  }
})
