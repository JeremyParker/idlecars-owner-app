'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, $state, HistoryService, FieldService) {

  FieldService.user_account = {};
  $scope.Field = FieldService;

  HistoryService.forget();
  $state.go('cars.detail.booking.phone_number');
})

.controller('booking.phone_number.controller', function ($scope, $timeout, FieldService) {
  $scope.fields = FieldService.formParts['cars.detail.booking.phone_number'].fields;

  $scope.validateForm = function () {
    $timeout(function () { FieldService.isValid = $scope.fieldForm.$valid });
  };
  $scope.validateForm();
})

.controller('booking.password.controller', function ($scope, $timeout, FieldService) {
  $scope.fields = FieldService.formParts['cars.detail.booking.password'].fields;

  $scope.validateForm = function () {
    $timeout(function () { FieldService.isValid = $scope.fieldForm.$valid });
  };
  $scope.validateForm();
})
