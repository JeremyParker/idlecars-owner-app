'use strict';

var Login = function() {
  this.inputPhone = element(by.css('input[name=phone]'));
  this.inputPassword = element(by.css('input[name=password]'));
  this.loginButton = element(by.cssContainingText('span', 'Log in'));
  this.signupButton = element(by.cssContainingText('span', 'Sign up'));
};

module.exports = new Login();
