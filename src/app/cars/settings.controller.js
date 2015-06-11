'use strict';

angular.module('idlecars')
.controller('settings.controller', function ($scope) {


  $scope.accountInfo = [
    {label: 'First Name', button: 'Chengxing', hasBar: true},
    {label: 'Last Name', button: 'Zhang', hasBar: true},
    {label: 'Email', button: 'craigstar@gmail.com', hasBar: true},
    {label: 'Phone', button: '917-376-8864', hasBar: true},
    {label: 'Change Password', nextPointer: true},
  ];

  $scope.driverDocuments = [
    {label: 'Driver License', image: '/assets/images/DriverLicense.png', hasBar: true, isUploaded: true},
    {label: 'FHV License', image: '/assets/images/FHVLicense.png', hasBar: true, isUploaded: true},
    {label: 'Defensive Driving', image: '/assets/images/DefensiveDriving.png', hasBar: true, isUploaded: false},
    {label: 'Proof of Address', image: '/assets/images/ProofAddress.png', isUploaded: false},
  ];
})
