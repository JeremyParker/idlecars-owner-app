'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, Upload, UserUploadService) {
  var user = {parse_id: 'Fmcb73mqWY'};
  $scope.fileUrl = false;

  var _setImageUrl = function(usersUploads) {
    // NOTE: $timeout makes sure that this "runs on the next digest cycle"
    // I don't really know what that means, but this works
    $timeout(function() {
      var file = usersUploads.get($scope.fileKey);
      if (file) { $scope.fileUrl = file.url(); }
    });
  };

  UserUploadService.get({
    user: user,
  }).then(_setImageUrl);

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    UserUploadService.upload({
      user: user,
      file: file,
      fileKey: $scope.fileKey,
    }).then(_setImageUrl);
  };
});
