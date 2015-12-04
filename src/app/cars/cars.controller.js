'use strict';

angular.module('idlecars')
.controller('cars.controller', function ($scope, $state, CarService, OwnerRequiredService, UserRequiredService, AppNotificationService) {
  CarService.get().then(function (cars) {
    $scope.cars = cars
  })

  var checkStates = function (state) {
    $scope.isBusy = false;

    if (state) {
      $state.go('ownerAccount');
      AppNotificationService.push({warning: 'Remember to upload your missing documents. Go to "My Account" from the menu.'})
    };
  }

  $scope.isBusy = true;
  UserRequiredService.requiredDocState().then(checkStates);
  OwnerRequiredService.requiredDocState().then(checkStates);
})
