'use strict';

describe('sign up page', function () {
  var navbar;
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');

    navbar = require('../navbar/navbar.po');
    page = require(('./signup.po'));

    navbar.menu.click();
    navbar.signupButton.click();
  });

  iit('should create an account without choosing a car', function() {
    page.phone.sendKeys('1234567890');
    navbar.nextButton.click();
    page.password1.sendKeys('12');
    page.password2.sendKeys('12');
    page.nextButton.click();
  });

})
