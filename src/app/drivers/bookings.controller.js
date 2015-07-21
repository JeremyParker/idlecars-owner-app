'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, Restangular, MyDriverService) {

  var bookingId;

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  MyDriverService.get().then(initScope);

  Restangular.all('bookings').getList().then(function (bookings) {
    var booking = bookings[0];
    bookingId = booking.id;

    $scope.car = booking.car;
    $scope.state = booking.state_details;
  })

  $scope.cancelBooking = function () {

  }
})
