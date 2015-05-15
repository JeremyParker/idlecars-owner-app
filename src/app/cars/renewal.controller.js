'use strict';

angular.module('idlecars')
.controller('renewal.showCtrl', function ($scope, $stateParams) {
  $scope.renewalId = $stateParams.renewalId;
});
