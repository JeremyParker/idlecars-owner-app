'use strict';

angular.module('idlecars')
.controller('main.controller', function ($scope, mapService, $location) {
  $scope.showBack = true;
  $scope.done = true;

  console.log($location.path())

})
