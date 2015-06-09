'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, FieldService) {

  FieldService.user_account = {};
  $scope.Field = FieldService;

  FieldService.showForm();

})

.controller('booking.email.controller', function ($scope, $timeout, FieldService) {
  FieldService.index = 0;

  $scope.validateForm = function () {
    $timeout(function () {$scope.Field.validateForm($scope.fieldForm)});
  };
  $scope.validateForm();
})

.controller('booking.name.controller', function ($scope, $timeout, FieldService) {
  FieldService.index = 1;

  $scope.validateForm = function () {
    $timeout(function () {$scope.Field.validateForm($scope.fieldForm)});
  };
  $scope.validateForm();
})

.controller('booking.phone_number.controller', function ($scope, $timeout, FieldService) {
  FieldService.index = 2;

  $scope.validateForm = function () {
    $timeout(function () {$scope.Field.validateForm($scope.fieldForm)});
  };
  $scope.validateForm();
})
