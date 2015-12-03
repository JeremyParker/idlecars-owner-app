'use strict';

var Fields = function() {
  var self = this;

  self.phone = element(by.css('input[name=phone_number]'));
  self.loginButton = element(by.cssContainingText('a', 'Log in'));
  self.password1 = element(by.css('input[name=password'));
  self.password2 = element(by.css('input[name=re_password'));
  self.email = element(by.css('input[name=email]'));
  self.firstname = element(by.css('input[name=first_name]'));
  self.lastname = element(by.css('input[name=last_name]'));
};

module.exports = new Fields();
