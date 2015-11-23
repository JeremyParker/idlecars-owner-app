'use strict';

angular.module('idlecars')
.controller('cars.update.controller', function ($scope, $rootScope, $stateParams, Restangular, NavbarService) {
  // this user is actually the car object
  if (!$stateParams.car) {
    Restangular.one('cars', $stateParams.carId).get().then(function (car) {
      $scope.user = car;
    })
  }
  $scope.user = $stateParams.car;

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid;
  }

  $rootScope.navSave = function() {
    CarService.patch($scope.user).then(function () {
      var detailState = 'cars.detail({carId:' + $stateParams.carId + '})';
      $state.go(detailState);
    })
  }

  NavbarService.validateInit($scope, true);
})

.controller('cars.update.rent.controller', function ($scope) {
  $scope.fields = [{
    label: 'Rent per week($)',
    name: 'solo_cost',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.available.controller', function ($scope) {
  //TODO: date does not work. we need to refactor this
  $scope.fields = [{
    label: 'When will the car be available',
    name: 'next_available_date',
    placeholder: 'YYYY-MM-DD',
    type: 'date',
    autoFocus: true,
  }];
})

.controller('cars.update.deposit.controller', function ($scope) {
  $scope.fields = [{
    label: 'Deposit required($)',
    name: 'solo_deposit',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.minimum.controller', function ($scope) {
  $scope.fields = [{
    label: 'Minimum rental',
    name: 'min_lease',
    type: 'text',
  }];
})

.controller('cars.update.mileage.controller', function ($scope) {
  $scope.fields = [{
    label: 'Current mileage(optional)',
    name: 'last_known_mileage',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.exterior.controller', function ($scope, $rootScope) {
  //TODO: this does not work correctly. we need to refactor it
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select exterior color:';
  $scope.singleChoice = {
    key: 'exterior_color',
    choices: ['black', 'red', 'white', 'yellow'],
  }
})

.controller('cars.update.interior.controller', function ($scope, $rootScope) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select interior color:';
  $scope.singleChoice = {
    key: 'interior_color',
    choices: ['black', 'red', 'white', 'yellow'],
  }
})
