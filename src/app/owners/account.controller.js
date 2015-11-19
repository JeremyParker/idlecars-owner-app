'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, AuthService, UserService, MyOwnerService) {

  // TODO: we should move it to a presenter.
  $scope.userInfo = [
    {title: 'First Name', link: 'user.firstname', content: 'first_name'},
    {title: 'Last Name', link: 'user.lastname', content: 'last_name'},
    {title: 'Email', link: 'user.email', content: 'email'},
    {title: 'Phone number', link: 'user.phonenumber', content: 'phone_number'},
    {title: 'Password', link: 'password.change', content: ''},
  ];

  $scope.ownerInfo = [
    {title: 'Company Name', link: '.update.company', content: 'company_name'},
    {title: 'Zip Code', link: '.update.zipcode', content: 'zipcode'},
    {title: 'Bank Account', link: '.bankLink', content: 'bank_account_state'}
  ];

  UserService.get().then(function (user) {
    $scope.user = angular.copy(user);
  })

  MyOwnerService.get().then(function (owner) {
    $scope.owner = angular.copy(owner);
  })

  $scope.logout = function () {
    AuthService.logout();
  };

  $scope.toggleSMS = function () {
    $scope.isBusy = true;
    var patchData = {sms_enabled: !$scope.owner.sms_enabled};
    MyOwnerService.patch(patchData)
    .then(function (owner) { $scope.owner = owner })
    .finally(function () { $scope.isBusy = false })
  }
})
