'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $state, $stateParams, CarService) {
  if (!$stateParams.car) {
    CarService.get({carId: $stateParams.carId}).$promise.then(
      function(car) {
        $scope.car = car;
        heap.track('carDetail', {carId: car.id});
      },
      function(response) {
        $state.go('cars');
      }
    );
  }

  $scope.car = $stateParams.car;
});
