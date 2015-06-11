angular.module('idlecars')
.factory('UserUploadService', function($q) {
  // TODO: move this to app.run
  // TODO: get keys from config
  Parse.initialize("ltjv77iZ50v0g4Czpd6nbcxGgNb0McnPdJ5v5kcj", "zncD5UiutU0xRXbG9DCTYSHP6XmBGykSRYzxiq8K");
  var UserUploads = Parse.Object.extend('UserUploads');

  var upload = function(options) {
    var file = options.file;
    var parseFile = new Parse.File(file.name, file, file.type);

    return $q(function(resolve, reject) {
      parseFile.save().then(function(remoteFile) {
        resolve(remoteFile.url());
      });
    });
  };

  var getUsersUploads = function(options) {
    // TODO: cache this value, but how when it's async?
    var query = new Parse.Query(UserUploads);
    return query.get(options.user.parse_id);
  };

  return {
    upload: upload,
    get: getUsersUploads,
  };
});
