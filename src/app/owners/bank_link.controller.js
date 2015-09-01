'use strict';

angular.module('idlecars')
.controller('owners.bankLink.controller', function ($scope, Restangular, $state) {

  $scope.params = {}
  $scope.params.individual = {}
  $scope.params.individual.first_name = 'taco'
  $scope.params.individual.last_name = 'taco'
  $scope.params.individual.email = 'taco@taco.com'

  $scope.params.individual.address = {}
  $scope.params.individual.address.street_address = '123 taco street'
  $scope.params.individual.address.locality = 'taco'
  $scope.params.individual.address.region = 'tx'
  $scope.params.individual.address.postal_code = '74305'

  $scope.params.funding = {}
  $scope.params.funding.routing_number = 123123123
  $scope.params.funding.account_number = 1231231231

  $scope.params.tos_accepted = true

  $scope.linkBankAccount = function() {
    // TODO: replace `1` with the real owner id
    // TODO: a real solution for TOS
    Restangular.one('owners', 'me').all('bank_link').post($scope.params).then(function () {
      $state.go('bankSuccess')
    })
  }
});
