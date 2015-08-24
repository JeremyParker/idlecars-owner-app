'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, $state, BookingService, MyDriverService, DocRouterService, PaymentService) {

  var initScope = function (me) {
    $scope.username = me.client_display;
  }

  var _getBooking = function () {
    BookingService.get().then(function (bookings) {
      $scope.booking = angular.copy(bookings[0]) || [];
    })
  }

  MyDriverService.get().then(initScope);
  _getBooking();

  $scope.cancelBooking = function () {
    BookingService.cancel($scope.booking.id).then(_getBooking);
  }

  $scope.doShowConfirm = function () { $scope.showConfirm = true }

  $scope.uploadDocuments = function () {
    DocRouterService.goRequiredDoc();
  }

  $scope.checkout = function () {
    PaymentService.pending = $scope.booking;
    $state.go('^.paymentMethod')
  }

  $scope.pickUp = function () {
    BookingService.pickup($scope.booking.id).then(function () {
      $state.go('^.success');
    })
  }
})
