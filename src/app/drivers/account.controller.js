'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope) {

  $scope.accountInfo = [
    {label: 'First Name', content: 'Chengxing'},
    {label: 'Last Name', content: 'Zhang'},
    {label: 'Email', content: 'craigstar@gmail.com'},
    {label: 'Phone', content: '917-376-8864'},
  ];

  $scope.driverDocuments = [
    {label: 'Driver License', image: '/assets/images/DriverLicense.png'},
    {label: 'FHV License', image: '/assets/images/FHVLicense.png'},
    {label: 'Defensive Driving'},
    {label: 'Proof of Address'},
  ];
})
