'use strict';

angular.module('idlecars')
.controller('show.controller', function ($scope) {
  $scope.driverDocuments = [
    {label: 'Driver License', isUploaded: true},
    {label: 'FHV License', isUploaded: true},
    {label: 'Defensive Driving', isUploaded: false},
    {label: 'Proof of Address', isUploaded: false},
  ];

})
