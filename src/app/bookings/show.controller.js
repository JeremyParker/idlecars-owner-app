'use strict';

angular.module('idlecars')
.controller('bookings.showCtrl', function ($scope, Upload) {
  Parse.initialize("ltjv77iZ50v0g4Czpd6nbcxGgNb0McnPdJ5v5kcj", "zncD5UiutU0xRXbG9DCTYSHP6XmBGykSRYzxiq8K");

  var UserUploads = Parse.Object.extend('UserUploads');
  var query = new Parse.Query(UserUploads);
  var userUploads;

  $scope.uploadUrl = null;

  query.get("Fmcb73mqWY").done(function (object) {
    userUploads = object;
    var imageUrl = userUploads.get('driver_license_image').url();
    console.log(userUploads.get('driver_license_image'));
    if (imageUrl) {
      console.log(imageUrl);
      $scope.uploadUrl = imageUrl;
      $scope.$apply();
    }
  });

  $scope.upload = function(files) {
    var file = files[0];
    if (!file) {
      console.log('no file');
      return;
    }

    var file = new Parse.File(file.name, file, file.type);

    file.save().then(
      function() {
        userUploads.set("driver_license_image", file);
        userUploads.save().then(function(uploads) {
          $scope.uploadUrl = uploads.get('driver_license_image').url()
          console.log($scope.uploadUrl);
          $scope.$apply();
        });
      },
      handleError
    );
  };

  var handleError = function(error) {
    console.log(error);
  }
});
