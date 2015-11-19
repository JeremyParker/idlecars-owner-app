'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, UserService, MyOwnerService) {

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
    {title: 'Address', link: '.update.address', content: 'address1'},
    {title: 'Apartment', link: '.update.apartment', content: 'address2'},
    {title: 'City', link: '.update.city', content: 'city'},
    {title: 'Zip Code', link: '.update.zipcode', content: 'zipcode'},
  ];

  UserService.get().then(function (user) {
    $scope.user = angular.copy(user);
  })

  MyOwnerService.get().then(function (owner) {
    $scope.owner = angular.copy(owner);
  })

  $scope.toggleSMS = function () {
    $scope.isBusy = true;
    var patchData = {sms_enabled: !$scope.owner.sms_enabled};
    MyOwnerService.patch(patchData)
    .then(function (owner) { $scope.owner = owner })
    .finally(function () { $scope.isBusy = false })
  }
})
