'use strict';

var Success = function() {
  var self = this;

  self.title = element(by.css('h1'));
  self.rentalButton = element(by.css('a.button'));
};

module.exports = new Success();
