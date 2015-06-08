'use strict'

angular.module('idlecars')
.factory('BookingService', function ($resource, config) {
  return $resource(config.api_base_url + 'bookings/');
})

.service('FieldService', function ($stateParams, $state, BookingService) {
  var emailFields = [{
    state: 'email',
    label: 'Your email address',
    placeholder: 'Email address',
    name: 'email',
    type: 'email',
    maxlength: '50',
  }];

  var nameFields = [{
    state: 'name',
    label: 'What\'s your name?',
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '20',
  },
  {
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '20',
  }];

  var phoneFields = [{
    state: 'phone_number',
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
  }];

  var _saveDidComplete = function (data) {
    $state.go('cars.bookingsShow', {bookingId: 4242});
  }

  // default field setting
  this.fields = [emailFields, nameFields, phoneFields];
  this.index = 0;
  this.isValid = false;
  this.user_account = {};

  this.saveData =  function () {
    var bookingParams = {
      user_account: this.user_account,
      car_id: $stateParams.carId,
    }

    var newBooking = new BookingService(bookingParams);
    newBooking.$save().then(_saveDidComplete);
  }

  this.showForm = function () {
    $state.go('cars.carsShow.carsBooking.email')
  }

  this.goNextState = function () {
    var currentState = $state.current.name;
    var fieldLength = this.fields.length;
    var parentState = 'cars.carsShow.carsBooking.';
    var nextState =  parentState + this.fields[0][0].state;

    for (var i = 0; i < fieldLength; i++) {
      var stateInField = parentState + this.fields[i][0].state;

      if (stateInField == currentState) {
        if (i < fieldLength - 1) {
          nextState = parentState + this.fields[i+1][0].state;
        }
        else {
          this.saveData();
          return;
        }
      };
    };

    $state.go(nextState);
  }

  this.validateForm = function(fieldForm, formType) {

    this.isValid = true;
    var index = this._getFieldIndex(formType);
    var field = this.fields[index];

    for (var i = 0; i < field.length; i++) {
      var field_name = field[i].name;

      if (fieldForm[field_name].$invalid) {
        this.isValid = false;
      }
    }
  }

  this._getFieldIndex = function (formType) {
    for (var i = 0; i < this.fields.length; i++) {
      if (formType == this.fields[i][0].state) {
        return i;
      };
    };
  }

})
