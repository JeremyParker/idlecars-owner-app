'use strict';

var Detail = function() {
  var self = this;

  self.name = element(by.css('car-detail h3'));
  self.plate = element.all(by.css('car-detail p')).get(0);
  self.status = element.all(by.css('car-detail p')).get(1);

  self.attributes = element.all(by.repeater('item in carDetail'));
  self.rent = self.attributes.first().element(by.css('.content-main'));

  self.deleteButton = element(by.css('.alert-button'));
};

module.exports = new Detail();
