'use strict';

angular.module('idlecars')
.controller('fieldForm.controller', function ($scope, $rootScope, navService) {

  $rootScope.$broadcast('navFieldForm');
  navService.index = 0;

  $scope.$watch(function() { return navService.index; }, function() {
    setForm();
    if (navService.index == '1') {
      $scope.showLastName = true;
    }
    else {
      $scope.showLastName = false;
    }
  })

  $scope.showLastName = false;

  var setForm = function() {
    $scope.placeholder = navService.placeholderPool[navService.index];
    $scope.name = navService.namePool[navService.index];
    $scope.type = navService.typePool[navService.index];
    $scope.label = navService.labelPool[navService.index];
  }
})
