'use strict'

angular.module('idlecars')
.service('FieldService', function ($stateParams, $state, BookingService) {
  var phoneFields = [{
    state: 'phone_number',
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  var _saveDidComplete = function (data) {
    $state.go('cars.bookingsShow', {bookingId: 4242});
  }

  // default field setting
  this.fields = [phoneFields];
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

  this.keyPressed = function ($event) {
    if ($event.which === 13 && this.isValid) {
      this.goNextState();
    };
  }

  this.goNextState = function () {
    var currentState = $state.current.name;
    var fieldLength = this.fields.length;
    var nextState =  '^.' + this.fields[0][0].state;

    for (var i = 0; i < fieldLength; i++) {
      var stateInField = parentState + this.fields[i][0].state;

      if (stateInField === currentState) {
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

})
