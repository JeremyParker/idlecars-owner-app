'use strict'

angular.module('idlecars')
.factory('PaymentService', function (Restangular) {
  var service = {};

  service.getToken = function () {
    return Restangular.one('braintree_token').get();
  };

  return service;
})
