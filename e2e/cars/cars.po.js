'use strict';

var Cars = function() {
  var self = this;

  self.addCarButton = element(by.css('.add a'));
  self.cars = element.all(by.repeater('car in cars'));
  self.Xtravaganza = element.all(by.repeater('car in cars')).get(0);
  self.benz = element.all(by.repeater('car in cars')).get(1);
};

module.exports = new Cars();
