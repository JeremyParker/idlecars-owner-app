'use strict';

describe('index page', function () {
  var navbar;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    login.removeToken();
    navbar = require('./navbar.po');
  });

  it('has a menu button', function() {
    navbar.menu.click();
    expect(navbar.homeButton.isDisplayed()).toBe(true);
    expect(navbar.signupButton.isDisplayed()).toBe(true);
    expect(navbar.loginButton.isDisplayed()).toBe(true);
    expect(navbar.questionsButton.isDisplayed()).toBe(true);
  });
});
