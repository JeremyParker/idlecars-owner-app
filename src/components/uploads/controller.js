'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, Upload, UserUploadService, MyDriverService) {
  $scope.fileUrl = false;
  $scope.isBusy = false;

  MyDriverService.get().then(function(me) {
    if (!me[$scope.fileKey]) { return; }
    $scope.fileUrl = me[$scope.fileKey];
  });

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
    return MyDriverService.get().then(function(me) {
      me[$scope.fileKey] = fileUrl;
      console.log(me);
      return me.$save();
    });
  };
});
