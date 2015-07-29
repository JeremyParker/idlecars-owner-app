'use strict';

describe('Getting to a car detail page', function () {
  var carDetail = require('./detail.po');
  var helpers = require('../spec_helper');

  describe('from the car index', function () {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/index.html');
      var index = require('./index.po');
      index.delorean.click();
    });

    it('includes a header', function() {
      expect(carDetail.header.getText()).toBe('1985 DMC Delorean');
    });
  });

  describe('from deep linking', function () {
    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/#/cars/1');
    });

    it('includes a header', function() {
      expect(carDetail.header.getText()).toBe('1985 DMC Delorean');
    });
  });
})


