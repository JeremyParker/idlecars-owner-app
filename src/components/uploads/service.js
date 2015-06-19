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
        resolve(_secureUrl(remoteFile.url()));
      });
    });
  };

  var _secureUrl = function(insecureUrl) {
    if (!insecureUrl) { return; }

    return insecureUrl.replace(/^http:\/\//, 'https://s3.amazonaws.com/');
  }

  return {
    upload: upload,
  };
});
