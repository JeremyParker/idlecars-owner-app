'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, Restangular, MyDriverService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  MyDriverService.get().then(initScope);

  Restangular.all('bookings').getList().then(function (bookings) {
    $scope.bookings = bookings;
  })

  $scope.cancelBooking = function (bookingId) {
    var patchData = { state: '12' };

    Restangular.one('bookings', bookingId).patch(patchData)
    .then(function (data) { window.location.reload() });
  }
})
