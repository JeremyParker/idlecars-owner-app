'use strict';

angular.module('idlecars')
.controller('driver.update.proofaddress.controller', function ($scope, $state, $stateParams, HistoryService, MyOwnerService, CarService, AppNotificationService) {
  $scope.fileUrl = '/assets/images/address_proof_image.png';
  $scope.uploadTitle = 'your Motor Vehicle Record (optional)';
  $scope.associateToUser = function (fileUrl) {
    var patchData = {};
    patchData['upload_driver_doc'] = {
      'driver_id': $stateParams.driverId,
      'doc_name': 'address_proof_image',
      'file_url': fileUrl,
    }
    return MyOwnerService.patch(patchData);
  }

  $scope.afterUpload = function () {
    // car info has been updated in the backend, we need to clean our cache
    // either go back to car detail page or go to home page.
    CarService.clearCache()
    HistoryService.goPreviousState();
    AppNotificationService.push({success: 'you have already approved the driver.'});
  }

  $scope.skipOptionalDoc = function () {
    var patchData = {'authorize_mvr': $stateParams.driverId};
    MyOwnerService.patch(patchData).then(function () {
      CarService.clearCache()
      HistoryService.goPreviousState();
      AppNotificationService.push({success: 'you have already approved the driver and we have sent an notification to all taxi!'});
    })
  }
})
