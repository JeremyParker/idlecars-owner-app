'use strict';

var Fields = function() {
  var self = this;

  self.company = element(by.css('input[name=company]'));
  self.zipcode = element(by.css('input[name=zipcode]'));
};

module.exports = new Fields();
