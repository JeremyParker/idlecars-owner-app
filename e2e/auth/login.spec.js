'use strict';

describe('log in page', function () {
  var navbar;
  var page;
  var notification;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');

    navbar = require('../navbar/navbar.po');
    page = require(('./login.po'));
    notification = require('../components/app_notifications.po');

    navbar.menu.click();
    navbar.loginButton.click();
  });

  it('can log in', function() {
    page.inputPhone.sendKeys('7777777777');
    page.inputPassword.sendKeys('888');
    page.loginButton.click();
    // expect(notification.errorMessage.isDisplayed()).toBe(true)

  });

  it('can go to sign up page', function() {
    page.signupButton.click();
    expect(navbar.title.getText()).toEqual('Sign up');
  })
});
