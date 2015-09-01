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
    // TODO: a real solution for TOS
    var postParams = angular.copy($scope.params);
    postParams.individual.date_of_birth = _dateFormat($scope.params.individual.date_of_birth)

    Restangular.one('owners', 'me').all('bank_link').post(postParams).then(function () {
      $state.go('bankSuccess')
    })
  }

  var _dateFormat = function (date) {
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    return date.getFullYear().toString() + month + day;
  }
});
