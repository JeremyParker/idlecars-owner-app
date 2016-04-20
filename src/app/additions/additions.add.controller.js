'use strict';

angular.module('idlecars')
.controller('additions.add.controller', function ($scope, $rootScope, $state, $stateParams, $timeout, AdditionService) {
  // this predefine is very important,
  // otherwise angular won't assign the receiving addition to the correct medallion
  $scope.user = {};
  $scope.showSkipLink = false;

  // TODO: this user is actually the addition object, we need to rename user --> object in form.jade
  AdditionService.get($stateParams.additionId).then(function (addition) {
    $scope.user = addition;
    $scope.validateForm();
    $scope.setImageUrl();
  })
  // TODO: catch error

  $scope.validateForm = function() {
    if ($scope.$$childHead.fieldForm) {
      $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
    };
  }

  $rootScope.navGoNext = function() {
    AdditionService.patch($scope.user.id, $scope.user).then(function (addition) {
      $scope.user = angular.copy(addition);
      $state.go($scope.$$childHead.nextState);
    })
  }

  $scope.setImageUrl = function () {
    if (!$scope.user[$scope.$$childHead.fieldName]) { return; }
    $scope.$$childHead.fileUrl = $scope.user[$scope.$$childHead.fieldName];
  }

  $scope.associateToUser = function (fileUrl) {
    var patchData = {};
    patchData[$scope.$$childHead.fieldName] = fileUrl;
    return AdditionService.patch($stateParams.additionId, patchData);
  };

  $scope.afterUpload = function () {
    $state.go($scope.$$childHead.afterUploadSref);
  }
})

.controller('additions.add.phone_number.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the driver\'s phone number',
    name: 'phone_number',
    placeholder: '(555) 555-5555',
    type: 'tel',
    formatInput: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];

  $scope.nextState = '^.email';
  NavbarService.validateInit($scope);
})

.controller('additions.add.email.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the driver\'s email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $scope.nextState = '^.first_name';
  NavbarService.validateInit($scope);
})

.controller('additions.add.first_name.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the driver\'s first name',
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.nextState = '^.last_name';
  NavbarService.validateInit($scope);
})

.controller('additions.add.last_name.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the driver\'s last name',
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.nextState = '^.uploadDriverLicense';
  NavbarService.validateInit($scope);
})

.controller('additions.add.driverlicense.controller', function ($scope) {
  $scope.fieldName = 'driver_license_image';
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.uploadTitle = 'your Drivers License';
  $scope.afterUploadSref = '^.uploadFhvLicense';
  $scope.setImageUrl();
})

.controller('additions.add.fhvlicense.controller', function ($scope) {
  $scope.fieldName = 'fhv_license_image';
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.uploadTitle = 'your Hack License';
  $scope.afterUploadSref = '^.uploadDefensiveCert';
  $scope.setImageUrl();
})

.controller('additions.add.defensivedriving.controller', function ($scope) {
  $scope.fieldName = 'defensive_cert_image';
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.uploadTitle = 'your Social Security Card';
  $scope.afterUploadSref = '^.uploadAddressProof';
  $scope.setImageUrl();
})

.controller('additions.add.proofaddress.controller', function ($scope, $state, $stateParams, AdditionService) {
  $scope.fieldName = 'address_proof_image';
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.uploadTitle = 'your Motor Vehicle Record (optional)';
  $scope.afterUploadSref = '^.success';
  $scope.setImageUrl();

  $scope.skipOptionalDoc = function () {
    var patchData = {'mvr_authorized': ''};
    AdditionService.patch($stateParams.additionId, patchData).then(function () {
      $state.go('additions.add.success');
    })
  }
})

.controller('additions.add.success.controller', function ($scope, $state) {
  var myCars = function () { $state.go('cars') }

  $scope.label = 'Your request to add a driver has been sent to All Taxi.';

  $scope.buttons = [{
    value: 'OK',
    click: myCars,
  }]
})
