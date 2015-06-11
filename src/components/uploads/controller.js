'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, Upload, UserUploadService, DriverService, $q) {
  $scope.fileUrl = false;
  $scope.isBusy = false;

  var _setImageUrl = function(fileUrl) {
    // NOTE: $timeout makes sure that this "runs on the next digest cycle"
    // I don't really know what that means, but this works
    $timeout(function() {
      _associateToDriver(fileUrl).then(function () {
        $scope.isBusy = false;
        $scope.fileUrl = fileUrl;
      })
    });
  };

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    $scope.isBusy = true;

    UserUploadService.upload({
      file: file,
    }).then(_setImageUrl);
  };

  var _associateToDriver = function(fileUrl) {
    // TODO make request to update driver
    // something like this
    // DriverService.me().then(function(me) {
    //   me[$fileKey] = fileUrl;
    //   return me.save();
    // });

    return deleteMeWhenDriverUpdateWorks();
  };

  var deleteMeWhenDriverUpdateWorks = function() {
    return $q(function(resolve, reject) {
      resolve();
    });
  };
});
