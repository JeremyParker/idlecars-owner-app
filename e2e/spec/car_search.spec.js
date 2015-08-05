'use strict';

describe('Filtering cars', function () {
  var helpers = require('../spec_helper');
  var listing = require('../cars/list.po');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/index.html');
  });

  iit('only shows cars matching the filter', function () {

  });
});
