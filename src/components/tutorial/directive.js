'use strict';

angular.module('idlecars')
.directive('tutorial', function () {
  return {
    scope: {},
    templateUrl: 'components/tutorial/template.html',
    controller: function ($scope, $localStorage, $sessionStorage) {
      $scope.tutorialOn = !$sessionStorage.haveSeenTutorial && !$localStorage.tutorialsetting;

      $scope.closeTutorial = function () {
        $scope.tutorialOn = false;
        $sessionStorage.haveSeenTutorial = true;
      }

      $scope.setLocalStorage = function (setting) {
        $localStorage.tutorialsetting = setting;
      }
    }
  }
})
