'use strict';

var UploadDocs = function() {
    var self = this;

    self.email = element(by.css('input[name=email]'));
    self.uploadButton = element(by.css('input[type=file]'));
    self.uploadTitle = element(by.css('.upload-title'));
    self.progressBar = element(by.css('progress-bar'));
    self.skipButton = element(by.cssContainingText('a', 'skip for now'));
};

module.exports = new UploadDocs();
