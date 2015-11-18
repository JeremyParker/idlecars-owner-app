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
    {title: 'Company Name', link: 'user.firstname', content: 'company_name'},
    {title: 'Address', link: 'user.lastname', content: 'address1'},
    {title: 'Apartment', link: 'user.email', content: 'address2'},
    {title: 'City', link: 'user.phonenumber', content: 'city'},
    {title: 'Zip Code', link: 'password.change', content: 'zipcode'},
  ];

  $scope.driverDocuments = [
    {title: 'Driver License', link: '.update.uploadDriverLicense', image:'driver_license_image'},
    {title: 'FHV License', link: '.update.uploadFhvLicense', image: 'fhv_license_image'},
    {title: 'Defensive Driving', link: '.update.uploadDefensiveCert', image: 'defensive_cert_image'},
    {title: 'Proof of Address', link: '.update.uploadAddressProof', image: 'address_proof_image'}
  ];

  UserService.get().then(function (user) {
    $scope.user = user;
  })

  MyOwnerService.get().then(function (owner) {
    $scope.owner = owner;
  })
})
