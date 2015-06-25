'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, $state, FieldService, AuthService, NewBookingService, HistoryService) {
  FieldService.user_account = {};
  $scope.Field = FieldService;

  if (AuthService.isLoggedIn()) {
    NewBookingService.createBooking($stateParams.carId);
  } else {
    $state.go('cars.detail.booking.phoneNumber');
  }

  // NOTE: this state only routes to other states, so users shouldn't return
  HistoryService.forget();
})

.controller('booking.form.controller', function ($scope, $state, $timeout, FieldService) {
  $scope.fields = FieldService.formParts[$state.current.name].fields;

  $scope.validateForm = function () {
    $timeout(function () { FieldService.isValid = $scope.fieldForm.$valid });
  };
  $scope.validateForm();
})
