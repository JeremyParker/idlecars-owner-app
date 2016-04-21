'use strict';

angular.module('idlecars')
.controller('hackLicense.controller', function ($scope, $rootScope, $state, RemovalService, NavbarService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'To remove a driver, enter the driver\'s hack license number.',
    name: 'hack_license_number',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $scope.isBusy = true;
    RemovalService.create({hack_license_number: $scope.user.hack_license_number})
    .then(function (removal) {
      $state.go('removals.add.first_name', {removalId: removal.id})
    })
    .finally(function () { $scope.isBusy = false })
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }

  NavbarService.validateInit($scope);
})
