'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, BookingService, MyDriverService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  var _getBooking = function () {
    BookingService.get().then(function (bookings) {
      $scope.bookings = angular.copy(bookings);
    })
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  var cancelBooking = function (bookingId) {
    var patchData = { state: '12' };

    BookingService.patch(bookingId, patchData).then(_getBooking);
  }

  $scope.icDismiss = function () { $scope.showConfirm = false }
  $scope.icConfirm = function () {
    $scope.showConfirm = false;
    cancelBooking($scope.bookings[0].id)
  }
})
