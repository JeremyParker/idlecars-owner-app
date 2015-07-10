'use strict';

angular.module('idlecars')
.controller('account.controller', function ($scope, $state, MyDriverService) {

  var accountInfoFields = [
    {client: 'First Name', server: 'first_name', link: ''},
    {client: 'Last Name', server: 'last_name', link: ''},
    {client: 'Email', server: 'email', link: ''},
    {client: 'Phone', server: 'phone_number', link: ''}
  ];
  var driverDocumentsFields = [
    {client: 'Driver License', server: 'driver_license_image', link: 'driverAccount.uploadDriverLicense'},
    {client: 'FHV License', server: 'fhv_license_image', link: 'driverAccount.uploadFhvLicense'},
    {client: 'Defensive Driving', server: 'defensive_cert_image', link: 'driverAccount.uploadAddressProof'},
    {client: 'Proof of Address', server: 'address_proof_image', link: 'driverAccount.uploadDefensiveCert'}
  ];

  $scope.driverDocuments = [];
  $scope.accountInfo = [];

  MyDriverService.get().then(
    function (me) {

      for (var i = 0; i < accountInfoFields.length; i++) {
        $scope.accountInfo.push({'title': accountInfoFields[i].client});

        var license = accountInfoFields[i].server;
        if (me[license] && me[license] != '') {
          $scope.accountInfo[i].content = me[license];
        };
      };

      for (var i = 0; i < driverDocumentsFields.length; i++) {
        $scope.driverDocuments.push({'title': driverDocumentsFields[i].client, link: driverDocumentsFields[i].link});

        var license = driverDocumentsFields[i].server;
        if (me[license] && me[license] != '') {
          $scope.driverDocuments[i].image = me[license];
        };
      };

    },
    function () {
      $state.go('cars');
    }
  )

})
