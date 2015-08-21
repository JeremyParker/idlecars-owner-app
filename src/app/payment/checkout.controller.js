'use strict';

angular.module('idlecars')
.controller('checkout.controller', function ($scope, $state, $stateParams, PaymentService, BookingService) {

  PaymentService.getToken().then(function (data) {
    braintree.setup(data.client_token, "dropin", {
      container: "dropin-container",
      form: 'payment-form',
      onPaymentMethodReceived: function (obj) {
        $scope.isBusy = true;

        var nonce = {nonce: obj.nonce};
        BookingService.checkout($stateParams.id, nonce)
        .then(function () {
          $scope.isBusy = false;
          $state.go('^');
        })
      }
    });
  })
});
