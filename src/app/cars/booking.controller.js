'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, $state, AuthService, HistoryService, FieldService) {
  FieldService.user_account = {};
  $scope.Field = FieldService;

  if (AuthService.isLoggedIn()) {
    FieldService.createBooking();
  } else {
    HistoryService.forget();
    $state.go('.phone_number');
  }
})

.controller('booking.form.controller', function ($scope, $state, $timeout, FieldService) {
  $scope.fields = FieldService.formParts[$state.current.name].fields;

  $scope.validateForm = function () {
    $timeout(function () { FieldService.isValid = $scope.fieldForm.$valid });
  };
  $scope.validateForm();
})
