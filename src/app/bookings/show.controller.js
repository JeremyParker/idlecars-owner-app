'use strict';

angular.module('idlecars')
.controller('bookings.showCtrl', function ($scope, Upload) {
  $scope.upload = function(files) {
    var file = files[0];
    if (!file) {
      console.log('no file');
      return;
    }

    Upload.upload({
      url: '/foo',
      file: file,
    });
  };
});
