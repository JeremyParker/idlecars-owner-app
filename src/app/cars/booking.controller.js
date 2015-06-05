'use strict';

angular.module('idlecars')
.controller('cars.booking.controller', function ($scope, $state, $stateParams, $timeout, NavbarService, BookingService, FieldService) {

  $scope.$emit('changeNavbar', 'field');

  // index -> which field in fields to show up
  FieldService.index = 0;
  $scope.index = 0;
  $scope.user_account = {};

  // validate forms whenever index changes, wait 1ms for asynchronization
  $scope.$watch(function() {return FieldService.index}, function() {
    if (FieldService.index >= $scope.fields.length) {
      saveData();
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
    var field = $scope.fields[$scope.index];

    for (var i = 0; i < field.length; i++) {
      var field_name = field[i].name;

      if ($scope.fieldForm[field_name].$invalid) {
        FieldService.isValid = false;
      }
    }
  }

  var emailFields = [{
    label: 'Your email address',
    placeholder: 'Email address',
    name: 'email',
    type: 'email',
    maxlength: '50'
  }];

  var nameFields = [{
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

  var phoneFields = [{
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
  }];

  // default field setting
  $scope.fields = [emailFields, nameFields, phoneFields];

  var saveData =  function() {
    var bookingParams = {
      user_account: $scope.user_account,
      car_id: $stateParams.car.id,
    }

    var newBooking = new BookingService(bookingParams);
    newBooking.$save().then(_saveDidComplete);
  }

  var _saveDidComplete = function(data) {
    $scope.$emit('changeNavbar', 'main');
    $state.go('bookingsShow', {bookingId: 4242});
  }
})
