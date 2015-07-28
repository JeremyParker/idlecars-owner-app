'use strict';

describe('log in page', function () {
  var index = require('../cars/index.po');
  var navbar = require('../navbar/navbar.po');
  var page = require('./login.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');

    helpers.startTest();
    navbar.menu.click();
    navbar.loginButton.click();
  });

  iit('can log in', function() {
    page.phone.sendKeys('1234567891');
    page.password.sendKeys('password');
    page.loginButton.click();
    expect(index.carEls.count()).toBe(4);
  });

  it('can go to sign up page', function() {
    page.signupButton.click();
    expect(navbar.title.getText()).toEqual('Sign up');
  })
});
