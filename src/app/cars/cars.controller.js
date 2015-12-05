'use strict';

angular.module('idlecars')
.controller('cars.controller', function ($scope, $state, CarService, RequiredService, AppNotificationService) {
  CarService.get().then(function (cars) {
    $scope.cars = cars
  })

  var excuted = false;
  var checkStates = function (state) {
    $scope.isBusy = false;

    if (state && !excuted) {
      excuted = true;
      $state.go('ownerAccount');
      AppNotificationService.push({warning: 'Remember to upload your missing documents. Go to "My Account" from the menu.'})
    };
  }

  $scope.isBusy = true;
  RequiredService.userState().then(checkStates);
  RequiredService.ownerState().then(checkStates);

  $scope.carDetail = function (car) {
    if (car.state_string == 'Waiting for information') {
      var state = RequiredService.carState(car) || '.detail';
      $state.go(state, {carId: car.id, car: car});
    }
    else {
      $state.go('.detail', {carId: car.id, car: car});
    }
  }
})
