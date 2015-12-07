'use strict';

var Cars = function() {
  var self = this;

  self.title = element(by.css('.welcome h2'));

  self.addCarButton = element(by.css('.add a'));
  self.cars = element.all(by.repeater('car in cars'));
  self.firstCar = element.all(by.repeater('car in cars')).first();
};

module.exports = new Cars();
