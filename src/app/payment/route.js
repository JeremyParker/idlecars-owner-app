'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider
    .state('driverAccount.paymentMethod', {
      data: {navbarInfo: {title: 'Payment Method', enableBack: true, enableMenu: true}},
      params: {pendingBooking: null},
      url: '/payment_method',
      views: {
        'content@': {
          templateUrl: 'app/payment/method.html',
          controller: 'paymentMethod.controller',
        }
      }
    })
})
