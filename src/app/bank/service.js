'use strict';

angular.module('idlecars')
.factory('BankService', function (Restangular, MyOwnerService) {
  var service = {};

  service.ownerBankInfo = {};

  service.post = function (params) {
    MyOwnerService.deCache();
    return Restangular.one('owners', 'me').all('bank_link').post(params);
  }

  return service;
})
