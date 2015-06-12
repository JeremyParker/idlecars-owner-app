'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope) {

  $scope.accountInfo = [
    {label: 'First Name', button: 'Chengxing'},
    {label: 'Last Name', button: 'Zhang'},
    {label: 'Email', button: 'craigstar@gmail.com'},
    {label: 'Phone', button: '917-376-8864'},
    {label: 'Change Password'},
  ];

  $scope.driverDocuments = [
    {label: 'Driver License', image: '/assets/images/DriverLicense.png', isUploaded: true},
    {label: 'FHV License', image: '/assets/images/FHVLicense.png', isUploaded: true},
    {label: 'Defensive Driving', image: '/assets/images/DefensiveDriving.png', isUploaded: false},
    {label: 'Proof of Address', image: '/assets/images/ProofAddress.png', isUploaded: false},
  ];
})
