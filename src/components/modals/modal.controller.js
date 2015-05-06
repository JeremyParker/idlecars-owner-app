'use strict';

angular.module('idlecars')
.controller('modal.controller', function ($scope, $rootScope) {
  // close button clicked
  $scope.closeModal = function() {
    $scope.modal_show = false;
    $rootScope.toDisable = false;
  };
});
