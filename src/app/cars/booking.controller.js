'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, FieldService) {

  FieldService.user_account = {};
  $scope.Field = FieldService;

  FieldService.showForm();

})

.controller('booking.email.controller', function ($scope, $timeout) {
  $scope.validateForm = function () {
    $timeout(function () {$scope.Field.validateForm($scope.fieldForm, 'email')});
  };
  $scope.validateForm();
})

.controller('booking.name.controller', function ($scope, $timeout) {
  $scope.validateForm = function () {
    $timeout(function () {$scope.Field.validateForm($scope.fieldForm, 'name')});
  };
  $scope.validateForm();
})

.controller('booking.phone_number.controller', function ($scope, $timeout) {
  $scope.validateForm = function () {
    $timeout(function () {$scope.Field.validateForm($scope.fieldForm, 'phone_number')});
  };
  $scope.validateForm();
})
