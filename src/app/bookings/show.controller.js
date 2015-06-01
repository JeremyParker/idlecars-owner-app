'use strict';

angular.module('idlecars')
.controller('bookings.showCtrl', function ($scope, Upload, UserUploadService) {

  $scope.uploadUrl = null;

  UserUploadService.fileUrl({
    user: {parse_id: 'Fmcb73mqWY'},
    fileCategory: 'driver_license_image',
  }).then(function(url) {
    $scope.uploadUrl = url;
  });

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) {
      console.log('no file');
      return;
    }

    UserUploadService.upload({
      user: user,
      file: file,
    }).then(function() {
      console.log('done');
    });
  };
});
