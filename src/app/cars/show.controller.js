'use strict';

angular.module('idlecars')
.controller('cars.showCtrl', function ($scope, $state, $stateParams, CarService, AppNotificationService) {

  if (!$stateParams.car) {
    CarService.get({carId: $stateParams.carId}).$promise.then(
      function(car) {
        $scope.car = car;
      },
      function(response) {
        $state.go('cars');
      }
    );
  }

  $scope.car = $stateParams.car;
});
