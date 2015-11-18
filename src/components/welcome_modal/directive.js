'use strict';

angular.module('idlecars')
.directive('welcomeModal', function () {
  return {
    scope: {},
    templateUrl: 'components/welcome_modal/template.html',
    controller: function ($scope, $localStorage) {
      $scope.welcomeModalOn = !$localStorage.welcomeModalClosed;

      $scope.closeModal = function () {
        $scope.welcomeModalOn = false;
        $localStorage.welcomeModalClosed = true;
      }
    }
  }
})
