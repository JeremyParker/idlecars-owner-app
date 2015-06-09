'use strict';

var CarsShow = function() {
  this.header = element(by.css('.headline-features h2'));
  this.bookingLink = element(by.cssContainingText('a', 'Request this car'));
};

module.exports = new CarsShow();
