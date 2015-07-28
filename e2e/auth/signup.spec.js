'use strict';

describe('sign up page', function () {
  var navbar = require('../navbar/navbar.po');
  var page = require('./signup.po');
  var carDetail = require('../cars/detail.po');
  var listing = require('../cars/index.po');
  var loading = require('../components/loading.po');

  var randomPhoneNumber = Math.floor(Math.random()*10000000000);

  var signupProcess = function () {
    page.phone.sendKeys(randomPhoneNumber);
    navbar.nextButton.click();
    page.password1.sendKeys('12');
    page.password2.sendKeys('12');
    navbar.nextButton.click();
  }

  describe('from menu button', function() {

    beforeEach(function () {
      browser.get('http://localhost:3000/index.html');

      navbar.menu.click();
      navbar.signupButton.click();
    });

    it('should create an account', function() {
      signupProcess();
      expect(listing.carEls.count()).toBe(4);
    });

  })

  describe('from a car', function () {

    beforeEach(function () {
      browser.get('http://localhost:3000/#/cars/1');
      carDetail.bookingLink.click();
    });


    it('should create an account', function() {
      signupProcess();
      expect(loading.modal.isDisplayed()).toBe(true);
    });
  });
});
