'use strict';

angular.module('idlecars')
.controller('owner.onboarding.controller', function ($scope, $rootScope, $state, $timeout, MyOwnerService) {
  $scope.user = {};

  MyOwnerService.get().then(function (me) {
    $scope.user = me;
    $scope.validateForm();
  })

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid })
  }

  $rootScope.navGoNext = function() {
    MyOwnerService.patch($scope.user)
    .then(function () { $state.go($scope.$$childHead.nextState) })
  }
})

.controller('owner.onboarding.social.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Enter the last 4 digits of your Social Security Number',
    name: 'social',
    type: 'text',
    maxlength: '4',
    pattern: '^\\d{4}$',
    autoFocus: true,
    required: true,
  }];

  $scope.nextState = '^.zipcode';

  NavbarService.validateInit($scope);
})

.controller('owner.onboarding.company.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Enter your company name (optional)',
    name: 'company_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
    required: false,
  }];

  $scope.nextState = '^.zipcode';

  NavbarService.validateInit($scope);
})

.controller('owner.onboarding.zipcode.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'What is the zip code where your cars can be picked up?',
    name: 'zipcode',
    type: 'text',
    maxlength: '5',
    pattern: '^\\d{5}$',
    autoFocus: true,
  }];

  $scope.nextState = 'ownerAccount.choice';

  NavbarService.validateInit($scope);
})
