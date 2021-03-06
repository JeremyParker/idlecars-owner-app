'use strict';

angular.module('idlecars')
.controller('cars.add.controller', function ($scope, $rootScope, $state, $stateParams, $timeout, CarService) {
  // this predefine is very important,
  // otherwise angular won't assign the receiving car to the correct place
  $scope.user = {};

  // TODO: this user is actually the car object, we need to rename user --> object in form.jade
  CarService.get($stateParams.carId).then(function (car) {
    $scope.user = car;
    $scope.validateForm();
  })
  // TODO: catch error

  $scope.validateForm = function() {
    if ($scope.$$childHead.fieldForm) {
      $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
    };
  }

  $rootScope.navGoNext = function() {
    CarService.patch($scope.user.id, $scope.user).then(function (car) {
      $scope.user = angular.copy(car);
      $state.go($scope.$$childHead.nextState);
    })
  }
})

.controller('cars.add.confirm.controller', function ($scope, $state, $stateParams, CarService) {
  var confirm = function () {
    $state.go('^.description');
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
      title: 'Medallion',
      content: $scope.user.plate,
    },
    {
      content: $scope.user.name,
    },
    {
      title: 'Agent',
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

.controller('cars.add.shift.controller', function ($scope, $rootScope, CarService) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'What shift is this car available?';
  $scope.singleChoice = {
    key: 'shift',
    choices: CarService.shift,
  }

  $scope.nextState = '^.description';
})

.controller('cars.add.description.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Listing details (for example "Night Shift: Weeknights 6pm-6am")',
    name: 'shift_details',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.rent';

  $rootScope.navNextEnabled = true;
})

.controller('cars.add.rent.controller', function ($scope, NavbarService) {
  $scope.$watch('user', function () {
    if ($scope.user.weekly_rent) {
      $scope.fields = [{
        label: 'Please enter the rent per shift.',
        name: 'weekly_rent',
        type: 'text',
        pattern: '^[0-9]+$',
        autoFocus: true,
      }];
    };
  })
  $scope.fields = [{
    label: 'Please enter the daily rent (in dollars)',
    name: 'weekly_rent',
    type: 'text',
    pattern: '^[0-9]+$',
    autoFocus: true,
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

  $scope.nextState = '^.success'; // used to be minimum
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
    label: 'What is the required deposit? (enter 0 if no deposit)',
    name: 'deposit',
    type: 'text',
    pattern: '^[0-9]+$',
    autoFocus: true,
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

  $scope.nextState = '^.success'; // used to be exterior
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
  var goToListings = function () { $state.go('cars') }
  var myCars = function () { $state.go('cars') }

  MyOwnerService.get().then(function (me) {
    if (me.bank_account_state == 'Add now') {
      $scope.label = 'Your shift has been added to the All Taxi listings.';

      $scope.buttons = [{
        value: 'OK',
        click: goToListings,
      }]
    }
  })

  $scope.label = 'Your car has been added to your account!';

  $scope.buttons = [{
    value: 'My listings',
    click: myCars,
  }]
})
