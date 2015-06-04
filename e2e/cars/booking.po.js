'use strict';

var CarsBooking = function() {
  this.header = element(by.css('h2'));
  this.nextButton = element(by.cssContainingText('button', 'next>'));

  this.emailInput = element(by.css('input[name=email]'));
  this.firstNameInput = element(by.css('input[name=first_name]'));
  this.lastNameInput = element(by.css('input[name=last_name]'));
  this.phoneInput = element(by.css('input[name=phone_number]'));
};

module.exports = new CarsBooking();
