'use strict';

var Login = function() {
  var self = this;

  self.phone = element(by.css('input[name=phone]'));
  self.password = element(by.css('input[name=password]'));
  self.loginButton = element(by.cssContainingText('span', 'Log in'));
  self.signupButton = element(by.cssContainingText('span', 'Sign up'));

  self.loginProcess = function () {
    self.phone.sendKeys('1234567891');
    self.password.sendKeys('password');
    self.loginButton.click();
  }

  self.removeToken = function () {
    browser.executeScript('return localStorage.removeItem("ngStorage-authToken");')
  }
};

module.exports = new Login();
