'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, $state, MyDriverService) {

  var accountInfoFields = {
    first_name: {title: 'First Name', link: ''},
    last_name: {title: 'Last Name', link: ''},
    email: {title: 'Email', link: ''},
    phone_number: {title: 'Phone', link: ''}
  };

  var driverDocumentsFields = {
    driver_license_image: {title: 'Driver License', link: '.uploadDriverLicense({goRequiredDocState: false})'},
    fhv_license_image: {title: 'FHV License', link: '.uploadFhvLicense({goRequiredDocState: false})'},
    defensive_cert_image: {title: 'Defensive Driving', link: '.uploadDefensiveCert({goRequiredDocState: false})'},
    address_proof_image: {title: 'Proof of Address', link: '.uploadAddressProof({goRequiredDocState: false})'}
  };

  $scope.driverDocuments = [];
  $scope.accountInfo = [];

  MyDriverService.get().then(
    function (me) {
      for (var key in accountInfoFields) {
        $scope.accountInfo.push({title: accountInfoFields[key].title, content: me[key], link: accountInfoFields[key].link});
      }

      for (var key in driverDocumentsFields) {
        var image = null;
        if (me[key] && me[key] != '') {
          image = me[key];
        }
        $scope.driverDocuments.push({title: driverDocumentsFields[key].title, image: image, link: driverDocumentsFields[key].link});
      }
    },
    function () {
      $state.go('cars');
    }
  )

})
