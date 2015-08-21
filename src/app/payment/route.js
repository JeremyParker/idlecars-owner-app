'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider
    .state('driverAccount.bookings.checkout', {
      url: '/:id/checkout',
      views: {
        'content@': {
          templateUrl: 'app/payment/checkout.html',
          controller: 'checkout.controller',
        }
      }
    })
})
