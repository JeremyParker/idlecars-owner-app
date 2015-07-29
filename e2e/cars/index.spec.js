'use strict';

describe('Listing cars', function () {
  var helpers = require('../spec_helper');
  var listing = require('./index.po');

  beforeEach(function () {
    helpers.startTest();
  });

  describe('getting the cars', function () {
    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/index.html');
    });

    it('lists 4 cars', function () {
      expect(listing.carEls.count()).toBe(4);
    });
  });
});
