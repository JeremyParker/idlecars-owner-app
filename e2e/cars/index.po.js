'use strict';

var CarsIndex = function() {
  this.carEls = element(by.css('body')).all(by.repeater('car in cars'));
};

module.exports = new CarsIndex();
