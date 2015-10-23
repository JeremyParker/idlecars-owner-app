'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $rootScope, $state, $stateParams, PaymentService, BookingService, MyDriverService) {

  $rootScope.pendingBooking = $stateParams.pendingBooking;
  $rootScope.isBusy = true;

  $scope.actionButton = 'Add this card';
  if ($rootScope.pendingBooking) {
    $scope.actionButton = 'Pay deposit ' + $rootScope.pendingBooking.car.deposit;
  };

  var addPaymentMethod = function (nonce) {
    return MyDriverService.addPaymentMethod({nonce: nonce});
  }

  var onSuccess = function () {
    MyDriverService.driver = $rootScope.newDriver;

    if ($rootScope.pendingBooking) {
      return BookingService.checkout($rootScope.pendingBooking.id)
      .then(BookingService.updateBookings)
    }
  }

  var onFinal = function () {
    if ($rootScope.pendingBooking) { $state.go('^.bookings') }
    else { $state.go('^') }

    $rootScope.isBusy = false;
  }

  PaymentService.getToken().then(function (data) {
    $rootScope.isBusy = false;

    // TODO: we need our custom form
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onUnsupported: function () {
        // TODO: Error case
      },
      onPaymentMethodReceived: function (obj) {
        if ($rootScope.nonce != obj.nonce) {
          $rootScope.nonce = obj.nonce;
          $rootScope.isBusy = true;

          $rootScope.newDriver = addPaymentMethod(obj.nonce);
          $rootScope.newDriver.then(onSuccess).finally(onFinal);
        };
      }
    });
  })
});
