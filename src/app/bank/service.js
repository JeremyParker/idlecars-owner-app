'use strict';

angular.module('idlecars')
.factory('BankService', function (Restangular) {
  var service = {};

  service.ownerBankInfo = {};

  service.post = function (params) {
    return Restangular.one('owners', 'me').all('bank_link').post(params);
  }

  return service;
})
