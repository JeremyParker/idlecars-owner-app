'use strict'

angular.module('idlecars')
.factory('BookingService', function (Restangular) {
  var service = {};

  service.bookings = [];

  service.post = function (params) {
    return Restangular.all('bookings').post(params);
  }

  service.get = function () {
    return Restangular.all('bookings').getList();
  }

  service.patch = function (bookingId, patchData) {
    return Restangular.one('bookings', bookingId).patch(patchData);
  }

  service.cancel = function (bookingId) {
    return Restangular.one('bookings', bookingId).all('cancelation').post('');
  }

  service.checkout = function (bookingId) {
    return Restangular.one('bookings', bookingId).all('checkout').post('');
  }

  service.pickup = function (bookingId) {
    return Restangular.one('bookings', bookingId).all('pickup').post('');
  }

  service.updateBookings = function (bookings) {
    if (bookings.constructor == Array) {
      service.bookings = bookings;
    }
    else if (bookings.constructor == Object) {
      service.bookings = [bookings];
    }
  }

  return service;
})

.run(function (AuthService, BookingService) {
  if (AuthService.isLoggedIn()) {
    BookingService.get().then(BookingService.updateBookings)
  }
})
