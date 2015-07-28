'use strict';

var CarsDetail = function() {
  this.header = element(by.css('.headline-features h2'));
  this.bookingLink = element(by.cssContainingText('a', 'Reserve this car'));
};

module.exports = new CarsDetail();
