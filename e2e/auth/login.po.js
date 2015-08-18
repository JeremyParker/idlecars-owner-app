'use strict';

var Login = function() {
  var self = this;

  self.phone = element(by.css('input[name=phone]'));
  self.password = element(by.css('input[name=password]'));
  self.loginButton = element(by.cssContainingText('span', 'Log in'));
  self.signupButton = element(by.cssContainingText('span', 'Sign up'));

  self.loginProcess = function (booking) {
    if (!booking) { self.phone.sendKeys('1234567891') }
    else { self.phone.sendKeys('1234567892') }
    self.password.sendKeys('password');
    self.loginButton.click();
  }
};

module.exports = new Login();
