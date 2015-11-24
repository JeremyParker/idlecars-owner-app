'use strict';

angular.module('idlecars')
.controller('cars.add.controller', function ($scope, $rootScope, $state, $stateParams, CarService) {
  // this user is actually the car object
  $scope.user = $stateParams.car || {};

  if (!$stateParams.car) {
    CarService.get($stateParams.carId).then(function (car) {
      $scope.user = car;
    })
    // TODO: catch error
  };

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid;
  }

  $rootScope.navGoNext = function() {
    CarService.patch($scope.user.id, $scope.user).then(function (car) {
      $scope.user = car;
      $state.go($scope.$$childHead.nextState);
    })
  }

  $scope.colors = ['Black', 'Charcoal', 'Grey', 'Dark Blue', 'Blue', 'Tan', 'White'];
})

.controller('cars.add.confirm.controller', function ($scope, $state) {
  var confirm = function () { $state.go('^.rent') }

  var decline = function () {
    // TODO: patch to remove the owner from the car
    $state.go('cars.plate')
  }

  var loadContent = function () {
    $scope.contents = [{
      title: 'Plate',
      content: $scope.user.plate,
    },
    {
      content: $scope.user.name,
    },
    {
      title: 'Base',
      content: $scope.user.base,
    }];
  }

  $scope.$watch('user', loadContent);

  $scope.label = 'Please confirm this is your car';

  $scope.buttons = [{
    value: 'That\'s my car',
    click: confirm,
  },
  {
    value: 'Not my car',
    click: decline,
  }];
})

.controller('cars.add.rent.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Rent per week($)',
    name: 'solo_cost',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.available';

  NavbarService.validateInit($scope);
})

.controller('cars.add.available.controller', function ($scope, $rootScope, $state) {
  var options = {
    clear: 'Cancel',
    today: '',
    min: new Date(),
    weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onClose: function () {
      var date = $scope.date;
      if (date) {
        var patchData = {next_available_date: [date.getFullYear(), date.getMonth(), date.getDate()]};

        CarService.patch($scope.user.id, patchData).then(function (car) {
          $state.go('^.deposit');
        })
        // TODO: catch error
      }
    },
  }

  $rootScope.navNextEnabled = true;

  $scope.label = 'Please choose the next available date:';

  $scope.contents = [{
    //TODO: get this from server
    content: '2015-11-23',
  }]

  $scope.buttons = [{
    value: 'change date',
    dateOptions: options,
  }];
})

.controller('cars.add.deposit.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Deposit required($)',
    name: 'solo_deposit',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.minimum';

  NavbarService.validateInit($scope);
})

.controller('cars.add.minimum.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Minimum rental',
    name: 'min_lease',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.mileage';

  NavbarService.validateInit($scope);
})

.controller('cars.add.mileage.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Current mileage(optional)',
    name: 'last_known_mileage',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.exterior';

  NavbarService.validateInit($scope);
})

.controller('cars.add.exterior.controller', function ($scope, $rootScope, $state) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select exterior color:';
  $scope.singleChoice = {
    key: 'exterior_color',
    choices: $scope.colors,
  }

  $rootScope.navGoNext = function() {
    $state.go('^.interior')
  }
})

.controller('cars.add.interior.controller', function ($scope, $rootScope, $state) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select interior color:';
  $scope.singleChoice = {
    key: 'interior_color',
    choices: $scope.colors,
  }

  $rootScope.navGoNext = function() {
    $state.go('^.success')
  }
})

.controller('cars.add.success.controller', function ($scope, $state) {
  var linkBankAccount = function () { $state.go('ownerAccount.bankLink') }

  $scope.label = 'Your car has been added to your account. \
    In order to receive weekly payments from the driver. you need to add your bank account details';

  $scope.buttons = [{
    value: 'Bank account',
    click: linkBankAccount,
  }]
})
