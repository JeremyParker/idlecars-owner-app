'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, FieldService) {
  FieldService.user_account = {};
  $scope.Field = FieldService;
})

.controller('booking.form.controller', function ($scope, $state, $timeout, FieldService) {

  heap.track('fieldByField', {field: $state.current.name});

  $scope.fields = FieldService.formParts[$state.current.name].fields;

  $scope.validateForm = function () {
    $timeout(function () { FieldService.isValid = $scope.fieldForm.$valid });
  };
  $scope.validateForm();
})
