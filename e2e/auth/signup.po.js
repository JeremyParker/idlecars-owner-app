'use strict';

var Signup = function() {
  this.phone = element(by.css('input[name=phone_number]'));
  this.login = element(by.cssContainingText('a', 'Log in'));
  this.password1 = element(by.css('input[name=password'));
  this.password2 = element(by.css('input[name=re_password'));
};

module.exports = new Signup();
