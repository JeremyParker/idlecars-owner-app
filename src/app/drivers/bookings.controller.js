'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, $q, BookingService, MyDriverService) {

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

  $scope.doShowConfirm = function () { $scope.showConfirm = true }

  $scope.cancelConfirm = $q.defer();

  $scope.cancelConfirm.promise
  .then(cancelBooking)

})
