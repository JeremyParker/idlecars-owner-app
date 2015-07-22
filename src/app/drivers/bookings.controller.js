'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, Restangular, MyDriverService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  var _getBooking = function () {
    Restangular.all('bookings').getList().then(function (bookings) {
      $scope.bookings = angular.copy(bookings);
    })
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  $scope.cancelBooking = function (bookingId) {
    var patchData = { state: '12' };

    Restangular.one('bookings', bookingId).patch(patchData).then(_getBooking);
  }
})
