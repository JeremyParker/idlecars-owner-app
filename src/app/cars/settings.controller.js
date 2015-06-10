'use strict';

angular.module('idlecars')
.controller('settings.controller', function ($scope) {
  $scope.accountInfo = [
    {label: 'Email', button: 'craigstar@gmail.com', hasBar: true},
    {label: 'Phone', button: '917-376-8864', hasBar: true},
    {label: 'Change Password', nextPointer: true},
  ];

  $scope.driverDocuments = [
    {label: 'Driver License', button: 'Change', image: '/assets/images/DriverLicense.png', hasBar: true},
    {label: 'FHV License', button: 'Change', image: '/assets/images/FHVLicense.png', hasBar: true},
    {label: 'Defensive Driving', button: 'Upload', image: '/assets/images/DefensiveDriving.png', hasBar: true},
    {label: 'Proof of Address', button: 'Upload', image: '/assets/images/ProofAddress.png'},
  ];
})
