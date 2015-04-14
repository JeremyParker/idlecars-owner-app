'use strict';

var CarsShow = function() {
  this.header = element(by.css('h2'));
  this.bookingLink = element(by.linkText('Request this car'));
};

module.exports = new CarsShow();
