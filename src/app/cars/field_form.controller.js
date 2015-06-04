'use strict';

angular.module('idlecars')
.controller('fieldForm.controller', function ($scope, $state, $stateParams, $timeout, navbarFunction, BookingService) {

  // index -> which field in fields to show up
  // isInvalid -> whether or not to disable the next> button
  $scope.index = 0;
  $scope.isInvalid = true;
  $scope.user_account = {};

  // next> button
  $scope.goNext = function() {
    if ($scope.index != $scope.fields.length - 1) {
      $scope.index++;
      return
    }
    saveData()
  }

  // < button
  $scope.goBack = function() {
    if ($scope.index != 0) {
      $scope.index--;
      return
    }
    navbarFunction.popState();
  }

  // validate forms whenever index changes, wait 1ms for asynchronization
  $scope.$watch(function() {return $scope.index}, function() {
    $timeout(function() {$scope.validateForm()}, 1)
  })

  // validates when current input's validation status changes or when Next, Back button is triggered
  $scope.validateForm = function() {
    // enable next> button initially and disable it if any of the input is invalid
    $scope.isInvalid = false;
    var field = $scope.fields[$scope.index];

    for (var i = 0; i < field.length; i++) {
      var field_name = field[i].name;

      if ($scope['fieldForm'][field_name]['$invalid']) {
      $scope.isInvalid = true;
      }
    }
  }

  var field0 = [{
    label: 'Your email address',
    placeholder: 'Email address',
    name: 'email',
    type: 'email',
    maxlength: '50'
  }];

  var field1 = [{
    id: 'first_name',
    label: 'What\'s your name?',
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '20'
  },
  {
    id: 'last_name',
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '20'
  }];

  var field2 = [{
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
  }];

  // default field setting
  $scope.fields = [field0, field1, field2];

  var saveData =  function() {
    var bookingParams = {
      user_account: $scope.user_account,
      car_id: $stateParams.car.id,
    }

    var newBooking = new BookingService(bookingParams);
    newBooking.$save().then(_saveDidComplete());
  }

  var _saveDidComplete = function(data) {
    $state.go('bookingsShow', {bookingId: 4242});
  }
})
