'use strict';

angular.module('idlecars')
.controller('owners.bankLink.controller', function ($scope, $state, UserService, BankService, MyOwnerService, AppNotificationService) {

  var empty = BankService.ownerBankInfo.individual === undefined;

  if(empty) {
    UserService.get().then(function (user) {
      $scope.params = { individual: user };
    })

  }
  else {
    $scope.params = BankService.ownerBankInfo;
    BankService.ownerBankInfo = {};
  }

  $scope.saveForm = function () { BankService.ownerBankInfo = $scope.params }

  $scope.linkBankAccount = function() {
    if ($scope.bankLinkForm.$invalid) { return $scope.showError = true };

    // TODO: a real solution for TOS
    $scope.isBusy = true;

    var postParams = angular.copy($scope.params);
    postParams.individual.date_of_birth = _dateFormat($scope.params.individual.date_of_birth)

    BankService.post(postParams).then(function () {
      $scope.isBusy = false;
      $state.go('^.bankSuccess');
    }).catch(function () {
      $scope.isBusy = false;
      if (!AppNotificationService.messages) {
        AppNotificationService.push('Sorry, there was an error. Please try again.');
      }
    }).finally(function () {
      MyOwnerService.clearCache();
    })
  }

  var _dateFormat = function (date) {
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    return date.getFullYear().toString() + month + day;
  }
});
