'use strict';

var Rental = function() {
  var self = this;

  self.userName = element(by.css('.user-info h2'));
  self.accountButton = element(by.css('.user-info button'));
  self.booking = element.all(by.repeater('booking in bookings'));
};

module.exports = new Rental();
