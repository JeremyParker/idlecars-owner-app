'use strict';

angular.module('idlecars')
.controller('owners.bankLink.controller', function ($scope) {

  $scope.individual = {}
  $scope.individual.first_name = 'taco'
  $scope.individual.last_name = 'taco'
  $scope.individual.email = 'taco@taco.com'

  $scope.address = {}
  $scope.address.street_address = '123 taco street'
  $scope.address.locality = 'taco'
  $scope.address.region = 'tx'
  $scope.address.postal_code = '74305'

  $scope.funding = {}
  $scope.funding.routing_number = 123123123
  $scope.funding.account_number = 1231231231

  $scope.tos_accepted = true

  $scope.linkBankAccount = function() {
    var params = {};
    params.tos_accepted = $scope.tos_accepted;
    params.individual = $scope.individual;
    params.individual.address = $scope.address;
    params.funding = $scope.funding;
    // TODO: submit to server
  }
});
