'use strict'

angular.module('idlecars')
.factory('BookingService', function ($resource, config) {
  return $resource(config.api_base_url + 'bookings/');
})

.service('FieldService', function ($stateParams, $state, BookingService) {
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
  this.fields = [emailFields, nameFields, phoneFields];
  this.index = 0;
  this.isValid = false;
  this.user_account = {};

  this.saveData =  function() {
    var bookingParams = {
      user_account: this.user_account,
      car_id: $stateParams.carId,
    }

    var newBooking = new BookingService(bookingParams);
    newBooking.$save().then(_saveDidComplete);
  }

  var _saveDidComplete = function(data) {
    $state.go('cars.bookingsShow', {bookingId: 4242});
  }
})
