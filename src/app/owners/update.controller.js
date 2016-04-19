'use strict';

angular.module('idlecars')
.controller('owner.update.controller', function ($scope, $rootScope, $state, $timeout, MyOwnerService) {
  MyOwnerService.get().then(function (owner) {
    $scope.user = angular.copy(owner);
    $scope.validateForm();
  })

  $rootScope.navSave = function() {
    MyOwnerService.patch($scope.$$childHead.user)
    .then(function () { $state.go('ownerAccount') })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }
})

.controller('owner.update.social.controller', function ($scope) {
  $scope.fields = [{
    label: 'Enter the last 4 digits of your Social Security Number',
    name: 'social',
    type: 'text',
    maxlength: '4',
    pattern: '^\\d{4}$',
    autoFocus: true,
    required: true,
  }];
})

.controller('owner.update.company.controller', function ($scope) {
  $scope.fields = [{
    label: 'Enter your company name (optional)',
    name: 'company_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
    required: false,
  }];
})

.controller('owner.update.address.controller', function ($scope) {
  $scope.fields = [{
    label: 'Enter your address',
    name: 'address1',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];
})

.controller('owner.update.apartment.controller', function ($scope) {
  $scope.fields = [{
    label: 'Enter your apartment',
    name: 'address2',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];
})

.controller('owner.update.city.controller', function ($scope) {
  $scope.fields = [{
    label: 'Enter your city',
    name: 'city',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];
})

.controller('owner.update.zipcode.controller', function ($scope) {
  $scope.fields = [{
    label: 'Zip code:',
    name: 'zipcode',
    type: 'text',
    maxlength: '5',
    pattern: '^\\d{5}$',
    autoFocus: true,
  }];
})
