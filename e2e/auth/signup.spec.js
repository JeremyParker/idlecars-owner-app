'use strict';

describe('sign up page', function () {
  var navbar = require('../navbar/navbar.po');
  var page = require('./signup.po');
  var carDetail = require('../cars/detail.po');
  var listing = require('../cars/index.po');
  var helpers = require('../spec_helper');

  describe('from menu button', function() {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/index.html');
      navbar.menu.click();
      navbar.signupButton.click();
    });

    it('should create an account', function() {
      page.signupProcess();
      expect(listing.carEls.count()).toBe(4);
    });

  })

  describe('from a car', function () {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3000/#/cars/1');
      carDetail.bookingLink.click();
    });


    it('should create an account', function() {
      page.signupProcess();
      expect(navbar.title.getText()).toEqual('Email');
    });
  });
});
