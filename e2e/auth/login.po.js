'use strict';

var Login = function() {
  this.phone = element(by.css('input[name=phone]'));
  this.password = element(by.css('input[name=password]'));
  this.loginButton = element(by.cssContainingText('span', 'Log in'));
  this.signupButton = element(by.cssContainingText('span', 'Sign up'));
};

module.exports = new Login();
