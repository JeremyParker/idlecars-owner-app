'use strict';

describe('Listing cars', function () {
  var helpers = require('../spec_helper');
  var page;

  beforeEach(function () {
    helpers.startTest();
  });

  describe('getting the cars', function () {
    beforeEach(function () {
      browser.get('http://localhost:3000/index.html');
      page = require('./index.po');
    });

    it('lists 4 cars', function () {
      expect(page.carEls.count()).toBe(4);
    });
  });
});
