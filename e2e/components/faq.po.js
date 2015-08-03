'use strict';

var Faq = function() {
  var self = this;

  self.title = element(by.css('h2'));
  self.callButton = element(by.css('a.button'));
};

module.exports = new Faq();
