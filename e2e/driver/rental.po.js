'use strict';

var Rental = function() {
  var self = this;

  self.userName = element(by.css('.user-info h2'));
  self.accountButton = element(by.css('.user-info button'));
  self.booking = element.all(by.repeater('booking in bookings'));
  self.status = element(by.css('section span'));
  self.carName = element(by.css('section h2'));
  self.cancelButton = element(by.cssContainingText('button', 'Cancel'));
};

module.exports = new Rental();
