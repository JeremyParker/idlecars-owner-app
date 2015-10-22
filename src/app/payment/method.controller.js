'use strict';

angular.module('idlecars')
.controller('paymentMethod.controller', function ($scope, $state, $stateParams, PaymentService, BookingService, MyDriverService) {

  var newDriver;
  $scope.isBusy = true;

  $scope.actionButton = 'Add this card';
  if ($stateParams.pendingBooking) {
    $scope.actionButton = 'Pay deposit ' + $stateParams.pendingBooking.car.deposit;
  };

  var addPaymentMethod = function (nonce) {
    return MyDriverService.addPaymentMethod({nonce: nonce});
  }

  var onSuccess = function () {
    MyDriverService.driver = newDriver;

    if ($stateParams.pendingBooking) {
      return BookingService.checkout($stateParams.pendingBooking.id)
      .then(BookingService.updateBookings)
    }
  }

  var onFinal = function () {
    if ($stateParams.pendingBooking) { $state.go('^.bookings') }
    else { $state.go('^') }

    $scope.isBusy = false;
  }

  PaymentService.getToken().then(function (data) {
    $scope.isBusy = false;

    // TODO: we need our custom form
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onUnsupported: function () {
        // TODO: Error case
      },
      onPaymentMethodReceived: function (obj) {
        $scope.isBusy = true;
        newDriver = addPaymentMethod(obj.nonce);
        newDriver.then(onSuccess).finally(onFinal);
      }
    });
  })
});
