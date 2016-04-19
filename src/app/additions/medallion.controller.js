'use strict';

angular.module('idlecars')
.controller('medallion.controller', function ($scope, $rootScope, $state, AdditionService, NavbarService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'To add a driver to a medallion, please enter the medallion number.',
    name: 'plate',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $scope.isBusy = true;
    AdditionService.create({plate: $scope.user.plate})
    .then(function (addition) {
      $state.go('additions.add.phone_number', {additionId: addition.id})
    })
    .finally(function () { $scope.isBusy = false })
    // TODO: catch error
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  NavbarService.validateInit($scope);
})
