'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, Upload, UserUploadService) {
  var user = {parse_id: 'Fmcb73mqWY'};
  $scope.fileUrl = false;
  $scope.isBusy = false;

  var _setImageUrl = function(fileUrl) {
    // NOTE: $timeout makes sure that this "runs on the next digest cycle"
    // I don't really know what that means, but this works
    $timeout(function() {
      $scope.isBusy = false;

      if (!fileUrl) { return; }

      var secureUrl = fileUrl.replace(/^http:\/\//, 'https://s3.amazonaws.com/');
      $scope.fileUrl = secureUrl;
    });
  };

  // UserUploadService.get({
  //   user: user,
  // }).then(_setImageUrl);

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    $scope.isBusy = true;

    UserUploadService.upload({
      user: user,
      file: file,
      fileKey: $scope.fileKey,
    }).then(_setImageUrl);
  };
});
