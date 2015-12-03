'use strict';

describe('sign up page', function () {
  var cars = require('../cars/cars.po');
  var navbar = require('../components/navbar.po');
  var signup = require('../auth/signup.po');
  var helpers = require('../spec_helper');

  describe('can sign up', function() {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3001/#/users/new/phone_number');
    });

    it('successfully with onboarding flow', function() {
      signup.phone.sendKeys('0987654321');
      navbar.nextButton.click();

      signup.password1.sendKeys('password');
      signup.password2.sendKeys('password');
      navbar.nextButton.click();

      signup.email.sendKeys('test@gmail.com');
      navbar.nextButton.click();

      signup.firstname.sendKeys('firstname');
      navbar.nextButton.click();

      signup.lastname.sendKeys('lastname');
      navbar.nextButton.click();

      expect(navbar.title.getText()).toEqual('Company name');
    });
  })

  describe('can go to', function () {

    beforeEach(function () {
      helpers.startTest();
      browser.get('http://localhost:3001/#/users/new/phone_number');
    });

    it('log in page', function() {
      signup.loginButton.click();
      expect(navbar.title.getText()).toEqual('Log in');
    });
  });
});
