'use strict';

angular.module('idlecars')
.controller('driver.update.proofaddress.controller', function ($scope, $state) {
  $scope.fieldName = 'address_proof_image';
  $scope.uploadTitle = 'your Motor Vehicle Record (optional)';
  $scope.afterUploadSref = '^.success';

  $scope.skipOptionalDoc = function () {
    // TODO - make some server call to mark that this request should be complete
    $state.go('^.success');
  }
})

// .controller('additions.update.success.controller', function ($scope, $stateParams, $state) {
//   var myCar = function () { $state.go('cars.detail', {carId: $stateParams.carId}) }

//   $scope.label = 'Your request to add a driver has been sent to All Taxi.';

//   $scope.buttons = [{
//     value: 'OK',
//     click: myCar,
//   }]
// })
