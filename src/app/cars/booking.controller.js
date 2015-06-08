'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, $timeout, NavbarService, FieldService) {

  // index -> which field in fields to show up
  FieldService.index = 0;
  FieldService.user_account = {};
  $scope.Field = FieldService;


  // validate forms whenever index changes, wait 1ms for asynchronization
  $scope.$watch(function() {return FieldService.index}, function() {

    if (FieldService.index >= FieldService.fields.length) {
      FieldService.saveData();
      return;
    };

    if (FieldService.index < 0) {
      NavbarService.popState();
      return;
    };

    $scope.index = FieldService.index;
    $timeout(function() {$scope.validateForm()});
  })

  // isValid -> whether or not to disable the next> button
  // validates when current input's validation status changes or when Next, Back button is triggered
  $scope.validateForm = function() {
    // enable next> button initially and disable it if any of the input is invalid
    FieldService.isValid = true;
    var field = FieldService.fields[FieldService.index];

    for (var i = 0; i < field.length; i++) {
      var field_name = field[i].name;

      if ($scope.fieldForm[field_name].$invalid) {
        FieldService.isValid = false;
      }
    }
  }

})
