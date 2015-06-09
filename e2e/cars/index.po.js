'use strict';

var CarsIndex = function() {
  this.carEls = element(by.css('body')).all(by.repeater('car in cars'));
  this.delorean = element(by.cssContainingText('h3', '1985 DMC Delorean'));
};

module.exports = new CarsIndex();
