'use strict';

var helper = function () {
  var self = this;

  var rp = require('request-promise');

  self.startTest = function () {
    rp('http://localhost:9999/e2e_test_setup').then(function() {
      console.log('e2e test setup request done');
    });

    browser.get('http://localhost:3000/#/').then(function() {
      browser.executeScript('return localStorage.removeItem("ngStorage-authToken");')
    })
  }

  self.docsApproval = function () {
    rp('http://localhost:9999/e2e_test_setup').then(function() {
      console.log('e2e test driver docs approved');
    });
  }
}

module.exports = new helper();
