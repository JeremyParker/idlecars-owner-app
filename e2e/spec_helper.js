'use strict';

var startTest = function () {
  var rp = require('request-promise');

  rp('http://localhost:9999/e2e_test_setup').then(function() {
    console.log('e2e test setup request done');
  });

  browser.get('http://localhost:3001/#/').then(function() {
    browser.executeScript('return localStorage.removeItem("ngStorage-authToken");')
    browser.executeScript('return localStorage.setItem("ngStorage-welcomeModalClosed", "true");')
    browser.executeScript('return localStorage.setItem("ngStorage-welcomeCarsModalClosed", "true");')
  })
}

exports.startTest = startTest;
