'use strict';

angular.module('idlecars')
.controller('docs_overview.controller', function ($scope) {
  $scope.driverDocuments = [
    {label: 'Driver License', isUploaded: true},
    {label: 'FHV License', isUploaded: true},
    {label: 'Defensive Driving', isUploaded: false},
    {label: 'Proof of Address', isUploaded: false},
  ];

})
