'use strict';

var Signup = function() {
  var navbar = require('../navbar/navbar.po');

  var self = this;
  var randomPhoneNumber = Math.floor(Math.random()*10000000000);

  self.phone = element(by.css('input[name=phone_number]'));
  self.login = element(by.cssContainingText('a', 'Log in'));
  self.password1 = element(by.css('input[name=password'));
  self.password2 = element(by.css('input[name=re_password'));

  self.signupProcess = function () {
    self.phone.sendKeys(randomPhoneNumber);
    navbar.nextButton.click();
    self.password1.sendKeys('12');
    self.password2.sendKeys('12');
    navbar.nextButton.click();
  }
};

module.exports = new Signup();
