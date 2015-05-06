'use strict';

var startTest = function () {
  var rp = require('request-promise');

  rp('http://localhost:9999/e2e_test_setup').then(function() {
    console.log('e2e test setup request done');
  });
}

exports.startTest = startTest;
