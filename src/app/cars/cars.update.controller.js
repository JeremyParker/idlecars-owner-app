'use strict';

angular.module('idlecars')
.controller('cars.update.controller', function ($scope, $rootScope, $timeout, $stateParams, $state, CarService, NavbarService) {
  // TODO: this user is actually the car object, we need to rename it to object
  $scope.user = $stateParams.car || {};
  $scope.colors = ['Black', 'Charcoal', 'Grey', 'Dark Blue', 'Blue', 'Tan', 'White'];

  if (!$stateParams.car) {
    CarService.get($stateParams.carId).then(function (car) {
      $scope.user = car;
      $scope.validateForm();
    })
  }

  $scope.validateForm = function() {
    if ($scope.$$childHead.fieldForm) {
      $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
    };
  }

  $rootScope.navSave = function() {
    CarService.patch($stateParams.carId, $scope.user).then(function (car) {
      $state.go('cars.detail', {carId: $stateParams.carId, car: car});
    })
  }

  NavbarService.validateInit($scope, true);
})

.controller('cars.update.rent.controller', function ($scope) {
  $scope.fields = [{
    label: 'Please enter the weekly rent (in dollars)',
    name: 'solo_cost',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.available.controller', function ($scope, $rootScope) {
  var options = {
    clear: 'Cancel',
    today: '',
    min: new Date(),
    weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onClose: function () {
      var new_date = $scope.$$childHead.date || $scope.$$childTail.date;
      if (new_date) {
        $scope.user.next_available_date = [
          new_date.getFullYear(),
          new_date.getMonth(),
          new_date.getDate(),
        ];
        $rootScope.navSave()
      };
    },
  }

  var loadContent = function () {
      $scope.contents = [{
        content: $scope.user.available_date_display,
      }]
  }

  $rootScope.navNextEnabled = true;
  $scope.$watch('user', loadContent)
  $scope.label = 'When is the car next available?';

  $scope.buttons = [{
    value: 'change date',
    dateOptions: options,
  }];
})

.controller('cars.update.deposit.controller', function ($scope) {
  $scope.fields = [{
    label: 'What is the required deposit? (in dollars)',
    name: 'solo_deposit',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.minimum.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please choose a minimum rental period:';
  $scope.singleChoice = {
    key: 'min_lease',
    choices: CarService.minimum_lease,
  }
})

.controller('cars.update.mileage.controller', function ($scope) {
  $scope.fields = [{
    label: 'What is the car\'s current mileage? (optional)',
    name: 'last_known_mileage',
    type: 'text',
    required: false,
    autoFocus: true,
  }];
})

.controller('cars.update.exterior.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'exterior color:';
  $scope.singleChoice = {
    key: 'exterior_color',
    choices: CarService.colors,
  }
})

.controller('cars.update.interior.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'interior color:';
  $scope.singleChoice = {
    key: 'interior_color',
    choices: CarService.colors,
  }
})
