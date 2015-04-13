'use strict';

angular.module('idlecars')
.controller('cars.showCtrl', function ($scope, $stateParams) {
  $scope.car = $stateParams.car;
});
