'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, $state, AuthService, HistoryService, FieldService, AppNotificationService) {
  FieldService.user_account = {};
  $scope.Field = FieldService;

  if (AuthService.isLoggedIn()) {
    FieldService.createBooking().catch(function() {
      AppNotificationService.push("You've already created a booking.");
      HistoryService.goPreviousState();
    });
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
