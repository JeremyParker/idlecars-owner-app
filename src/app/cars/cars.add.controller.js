'use strict';

angular.module('idlecars')
.controller('cars.add.controller', function ($scope, $rootScope, $state, $stateParams, $timeout, CarService) {
  // TODO: this user is actually the car object, we need to rename user --> object in form.jade
  $scope.user = $stateParams.car || {};

  if (!$stateParams.car) {
    CarService.get($stateParams.carId).then(function (car) {
      $scope.user = car;
      $scope.validateForm();
    })
    // TODO: catch error
  };

  $scope.validateForm = function() {
    if ($scope.$$childHead.fieldForm) {
      $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
    };
  }

  $rootScope.navGoNext = function() {
    CarService.patch($scope.user.id, $scope.user).then(function (car) {
      $scope.user = car;
      $state.go($scope.$$childHead.nextState);
    })
  }
})

.controller('cars.add.confirm.controller', function ($scope, $state, $stateParams, CarService) {
  var confirm = function () {
    $state.go('^.rent');
  }

  var decline = function () {
    CarService.patch($stateParams.carId, {owner: null})
    .then(function (car) {
      $state.go('plate');
    })
    // TODO: catch error
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

  $scope.label = 'Is this your car?';

  $scope.buttons = [{
    value: 'That\'s my car',
    click: confirm,
  },
  {
    value: 'That\'s not my car',
    click: decline,
  }];
})

.controller('cars.add.rent.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the weekly rent (in dollars)',
    name: 'solo_cost',
    type: 'text',
    pattern: '^[0-9,]+$',
    autoFocus: true,
    formatNum: true,
  }];

  $scope.nextState = '^.deposit';

  NavbarService.validateInit($scope);
})

.controller('cars.add.available.controller', function ($scope, $rootScope, $state) {
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
        $rootScope.navGoNext()
      };
    },
  }

  var loadContent = function () {
    $scope.contents = [{
      content: $scope.user.available_date_display,
    }]
  }

  $scope.nextState = '^.minimum';
  $rootScope.navNextEnabled = true;
  $scope.$watch('user', loadContent)
  $scope.label = 'When is the car next available?';

  $scope.buttons = [{
    value: 'change date',
    dateOptions: options,
  }];
})

.controller('cars.add.deposit.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'What is the required deposit? (in dollars)',
    name: 'solo_deposit',
    type: 'text',
    pattern: '^[0-9,]+$',
    autoFocus: true,
    formatNum: true,
  }];

  $scope.nextState = '^.available';

  NavbarService.validateInit($scope);
})

.controller('cars.add.minimum.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please choose a minimum rental period:';
  $scope.singleChoice = {
    key: 'min_lease',
    choices: CarService.minimum_lease,
  }

  $scope.nextState = '^.mileage';
})

.controller('cars.add.mileage.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'What is the car\'s current mileage? (optional)',
    name: 'last_known_mileage',
    type: 'text',
    required: false,
    autoFocus: true,
    formatNum: true,
  }];

  $scope.nextState = '^.exterior';

  NavbarService.validateInit($scope);
})

.controller('cars.add.exterior.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please choose the car\'s exterior color:';
  $scope.singleChoice = {
    key: 'exterior_color',
    choices: CarService.colors,
  }

  $scope.nextState = '^.interior';
})

.controller('cars.add.interior.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Now choose the interior color:';
  $scope.singleChoice = {
    key: 'interior_color',
    choices: CarService.colors,
  }

  $scope.nextState = '^.success';
})

.controller('cars.add.success.controller', function ($scope, $state, MyOwnerService) {
  var linkBankAccount = function () { $state.go('ownerAccount.bankLink') }
  var myCars = function () { $state.go('cars') }

  MyOwnerService.get().then(function (me) {
    if (me.bank_account_state == 'Add now') {
      $scope.label = 'Your car has been added to your account. \
        In order to receive weekly payments from the driver we need to get your bank account details.';

      $scope.buttons = [{
        value: 'Enter bank details',
        click: linkBankAccount,
      }]
    }
  })

  $scope.label = 'Your car has been added to your account!';

  $scope.buttons = [{
    value: 'My cars',
    click: myCars,
  }]
})
