'use strict'

angular.module('idlecars')
.service('FieldService', function ($stateParams, $state, DriverService, AuthService, BookingService) {

  var self = this;

  var phoneFields = [{
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  var passwordFields = [{
    label: 'Your password',
    placeholder: '',
    name: 'password',
    type: 'password',
    minlength: '6',
    autoFocus: true,
  }]

  self.formParts = {
    'cars.detail.booking.phone_number': {
      fields: phoneFields,
      nextState: '^.password'
    },
    'cars.detail.booking.password': {
      fields: passwordFields,
      saveOnExit: true,
    }
  }

  self.isValid = false;

  self.saveData =  function () {
    var user_account = self.user_account;

    var newDriver = new DriverService(user_account);
    newDriver.$save().then(function() {
      var loginParams = {
        username: user_account.phone_number,
        password: user_account.password,
      }
      return AuthService.login(loginParams);
    }).then(self.createBooking);
  }

  self.createBooking = function() {
    var newBooking = new BookingService({car: $stateParams.carId});
    return newBooking.$save().then(function(data) {
      $state.go('bookingDetail', {bookingId: data.id});
    });
  }

  // TODO: move self to the navbar controller
  self.keyPressed = function ($event) {
    if ($event.which === 13 && self.isValid) {
      self.goNextState();
    };
  }

  self.goNextState = function () {
    var currentPart = self.formParts[$state.current.name];

    if (currentPart.saveOnExit) {
      self.saveData();
    } else {
      $state.go(currentPart.nextState);
    };
  }

})
