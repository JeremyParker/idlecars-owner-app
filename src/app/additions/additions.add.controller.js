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

.controller('additions.add.phone_number.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s phone number',
    name: 'phone_number',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.email';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.email.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s email address',
    name: 'email',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.first_name';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.first_name.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s first name',
    name: 'first_name',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.last_name';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.last_name.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s last name',
    name: 'last_name',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.uploadDriverLicense';

  $rootScope.navNextEnabled = true;
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

.controller('additions.add.proofaddress.controller', function ($scope, $state, DocRouterService) {
  $scope.fieldName = 'address_proof_image';
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.uploadTitle = 'your Motor Vehicle Record (optional)';
  $scope.afterUploadSref = '^.success';
  $scope.setImageUrl();

  $scope.skipOptionalDoc = function () {
    // TODO - make some server call to mark that this request should be complete
    $state.go('driverAccount.onboarding.success');
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
