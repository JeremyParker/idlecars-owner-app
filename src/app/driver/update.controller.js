'use strict';

angular.module('idlecars')
.controller('driver.update.proofaddress.controller', function ($scope, $state, HistoryService, CarService) {
  $scope.fileUrl = '/assets/images/address_proof_image.png';
  $scope.uploadTitle = 'your Motor Vehicle Record (optional)';
  $scope.associateToUser = function (fileUrl) {
    var patchData = {};
    patchData['address_proof_image'] = fileUrl;
    // request to server to change driver's doc
    return CarService.get();
  }

  $scope.afterUpload = function () {
    // either go back to car detail page or go to home page.
    HistoryService.goPreviousState();
  }

  $scope.skipOptionalDoc = function () {
    // TODO - make some server call to mark that this request should be complete
    $state.go('^.success');
  }
})
