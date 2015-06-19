'use strict'

angular.module('idlecars')
.service('FieldService', function ($stateParams, $state, DriverService, AuthService, BookingService) {
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

  this.formParts = {
    'cars.detail.booking.phone_number': {
      fields: phoneFields,
      nextState: '^.password'
    },
    'cars.detail.booking.password': {
      fields: passwordFields,
      saveOnExit: true,
    }
  }

  this.isValid = false;

  this.saveData =  function () {
    var user_account = this.user_account;

    var newDriver = new DriverService(user_account);
    newDriver.$save().then(function() {
      var loginParams = {
        username: user_account.phone_number,
        password: user_account.password,
      }
      return AuthService.login(loginParams);
    }).then(this.createBooking);
  }

  this.createBooking = function() {
    var newBooking = new BookingService({car: $stateParams.carId});
    return newBooking.$save().then(function(data) {
      $state.go('bookingDetail', {bookingId: data.id});
    });
  }

  // TODO: move this to the navbar controller
  this.keyPressed = function ($event) {
    if ($event.which === 13 && this.isValid) {
      this.goNextState();
    };
  }

  this.goNextState = function () {
    var currentPart = this.formParts[$state.current.name];

    if (currentPart.saveOnExit) {
      this.saveData();
    } else {
      $state.go(currentPart.nextState);
    };
  }

})
