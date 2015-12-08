'use strict';

var Navbar = function() {
  this.navbar = element(by.css('.bar-wrapper'));
  this.menuButton = element(by.css('div.right-button'));
  this.nextButton = element(by.cssContainingText('.clear-button', 'Next'));
  this.saveButton = element(by.cssContainingText('.clear-button', 'Save'));
  this.backButton = element(by.css('.prev-pointer'));
  this.carsButton = element(by.cssContainingText('.menu a', 'My cars'));
  this.questionsButton = element(by.cssContainingText('.menu a', 'Questions'));
  this.accountButton = element(by.cssContainingText('.menu a', 'My account'));
  this.title = element(by.css('.bar-wrapper h3'));
};

module.exports = new Navbar();
