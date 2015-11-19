'use strict';

angular.module('idlecars')
.controller('owner.onboarding.controller', function ($scope, $rootScope, $state, $timeout, MyOwnerService) {
  MyOwnerService.get().then(function (owner) {
    $scope.user = angular.copy(owner);
    $scope.validateForm();
  })

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }
})

.controller('owner.onboarding.company.controller', function ($scope, MyOwnerService) {
  $scope.fields = [{
    label: 'Enter your company name',
    name: 'company_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyOwnerService.patch($scope.$$childHead.user)
    .then(function () { $state.go('^.zipcode') })
  }
})

.controller('owner.onboarding.zipcode.controller', function ($scope, MyOwnerService) {
  $scope.fields = [{
    label: 'Enter your zip code',
    name: 'zipcode',
    type: 'text',
    maxlength: '5',
    pattern: '^\\d{5}$',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    MyOwnerService.patch($scope.$$childHead.user)
    .then(function () { $state.go('^.zipcode') })
  }
})
