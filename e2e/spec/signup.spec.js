'use strict';

describe('sign up page', function () {
  var cars = require('../cars/cars.po');
  var navbar = require('../components/navbar.po');
  var fields = require('../templates/fields.po');
  var helpers = require('../spec_helper');

  describe('can sign up', function() {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3001/#/users/new/phone_number');
    });

    it('successfully with onboarding flow', function() {
      fields.phone.sendKeys('0987654321');
      navbar.nextButton.click();

      fields.password1.sendKeys('password');
      fields.password2.sendKeys('password');
      navbar.nextButton.click();

      fields.email.sendKeys('test@gmail.com');
      navbar.nextButton.click();

      fields.firstname.sendKeys('firstname');
      navbar.nextButton.click();

      fields.lastname.sendKeys('lastname');
      navbar.nextButton.click();

      fields.company.sendKeys('idlecars');
      navbar.nextButton.click();

      fields.zipcode.sendKeys('11201');
      navbar.nextButton.click();

      expect(navbar.title.getText()).toEqual('TLC plate');
    });
  })

  describe('can go to log in page', function () {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3001/#/users/new/phone_number');
    });

    it('with exsiting phone number', function() {
      fields.phone.sendKeys('9876543210');
      navbar.nextButton.click();
      expect(navbar.title.getText()).toEqual('Log in');
    });
  });
});
