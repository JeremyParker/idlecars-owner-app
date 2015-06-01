angular.module('idlecars')
.factory('UserUploadService', function($q) {
  // TODO: move this to app.run
  // TODO: get keys from config
  Parse.initialize("ltjv77iZ50v0g4Czpd6nbcxGgNb0McnPdJ5v5kcj", "zncD5UiutU0xRXbG9DCTYSHP6XmBGykSRYzxiq8K");
  var UserUploads = Parse.Object.extend('UserUploads');

  var userUploads;

  var upload = function(options) {
    promise = $q(function(resolve, reject) {
      resolve();
    });
    return promise;
  }

  var fileUrl = function(options) {
    promise = $q(function(resolve, reject) {
      var query = new Parse.Query(UserUploads);
      query.get(options.user.parse_id).done(function (object) {
        userUploads = object;
        var imageUrl = userUploads.get('driver_license_image').url();
        if (imageUrl) {
          resolve(imageUrl);
        }
      });
    });
    return promise;
  };

  return {
    upload: upload,
    fileUrl: fileUrl
  };

    // var file = new Parse.File(file.name, file, file.type);

    // file.save().then(
    //   function() {
    //     userUploads.set("driver_license_image", file);
    //     userUploads.save().then(function(uploads) {
    //       $scope.uploadUrl = uploads.get('driver_license_image').url()
    //       console.log($scope.uploadUrl);
    //       $scope.$apply();
    //     });
    //   },
    //   handleError
    // );

  var handleError = function(error) {
    console.log(error);
  }

});
