'use strict';

angular.module('idlecars')
.controller('upload.controller', function($scope, $stateParams, $timeout, $q, $state, UserUploadService, MyDriverService, DocRouterService) {
  // TODO: this component is not a component at all.. it needs to be generified
  $scope.fileUrl = '/assets/images/' + $scope.fieldName + '.png';
  $scope.isBusy = false;

  MyDriverService.get().then(function(me) {
    if (!me[$scope.fieldName]) { return; }
    $scope.fileUrl = me[$scope.fieldName];
  });

  var _uploadDidComplete = function(fileUrl) {
    $timeout(function() {
      _associateToDriver(fileUrl).then(function () {
        $scope.isBusy = false;
        return _getNextState();
      }).then(function(nextState) {
        $state.go(nextState || 'bookingSuccess');
      });
    });
  };

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) { return; }

    $timeout(function () {
      $scope.isBusy = true;
    })

    _resizeImage(file).then(function (fileData) {

      UserUploadService.upload({
        fileName: file.name,
        fileData: fileData,
      }).then(_uploadDidComplete);
    })
  }

  var _getNextState = function () {
    var stateName = $state.current.name;

    if (stateName.indexOf('newBooking') > -1) {
      return DocRouterService.requiredDocState();
    };
    return 'driverAccount';
  }

  var _dataUrlToData = function (dataURL) {
    return dataURL.split(',')[1];
  }

  var _resizeImage = function (file) {
    var deferred = $q.defer();
    var reader = new FileReader();
    reader.onloadend = function() {

      var tempImg = new Image();
      tempImg.src = reader.result;
      tempImg.onload = function() {

        var MAX_WIDTH = 600;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
          if (tempW > MAX_WIDTH) {
             tempH *= MAX_WIDTH / tempW;
             tempW = MAX_WIDTH;
          }
        }
        else {
          if (tempH > MAX_HEIGHT) {
             tempW *= MAX_HEIGHT / tempH;
             tempH = MAX_HEIGHT;
          }
        }

        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/png");

        var fileData = _dataUrlToData(dataURL);
        deferred.resolve(fileData);
      }
    }
    reader.readAsDataURL(file);
    return deferred.promise;
  }

  var _associateToDriver = function(fileUrl) {
    var patchData = {};
    patchData[$scope.fieldName] = fileUrl;
    return MyDriverService.patch(patchData);
  };
});
