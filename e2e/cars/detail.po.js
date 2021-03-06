'use strict';

var Detail = function() {
  var self = this;

  self.name = element(by.css('car-detail h3'));
  self.plate = element.all(by.css('car-detail p')).get(0);
  self.status = element.all(by.css('car-detail p')).get(1);

  self.ctaButtons = element.all(by.repeater('button in car.state_buttons'));
  self.firstCtaButton = self.ctaButtons.get(0);
  self.secondCtaButton = self.ctaButtons.get(1);
  self.thirdCtaButon = self.ctaButtons.get(2);

  self.attributes = element.all(by.repeater('item in carDetail'));
  self.rent = self.attributes.get(1).element(by.css('.content-main'));

  self.deleteButton = element(by.css('.alert-button'));
};

module.exports = new Detail();
