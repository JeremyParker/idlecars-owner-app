'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $timeout, UserUploadService, MyDriverService, DocRouterService) {
  $scope.fileUrl = false;
  $scope.isBusy = false;

  MyDriverService.get().then(function(me) {
    if (!me[$scope.fieldName]) { return; }
    $scope.fileUrl = me[$scope.fieldName];
  });

  var _uploadDidComplete = function(fileUrl) {
    // NOTE: $timeout makes sure that this "runs on the next digest cycle"
    // I don't really know what that means, but this works
    $timeout(function() {
      _associateToDriver(fileUrl).then(function () {
        $scope.isBusy = false;
        DocRouterService.goRequiredDoc();
      })
    });
  };

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    $scope.isBusy = true;

    UserUploadService.upload({
      file: file,
    }).then(_uploadDidComplete);
  };

  var _associateToDriver = function(fileUrl) {
    // TODO: implement a patch method on the service so it updates the cached driver
    return MyDriverService.get().then(function(me) {
      var patchData = {};
      patchData[$scope.fieldName] = fileUrl;
      return me.patch(patchData);
    });
  };
});
